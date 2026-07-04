import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  AuthLoginDTO,
  AuthProviderEnum,
  AuthRegisterDTO,
  LoginResponseDTO,
  RefreshResponseDto,
} from './auth.schemas';
import { UserService } from '../user/user.service';
import { RoleEnum, StatusEnum, UserDTO } from '../user/user.schemas';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { MailService } from '../mail/mail.service';
import { Session, User } from '../../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import crypto from 'crypto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import ms from 'ms';
import { SessionService } from '../session/session.service';
import { toUserDTO } from '../user/user.mapper';
import { JwtRefreshPayloadType } from './strategies/types/jwt-refresh-payload.type';
import { JwtPayloadType } from './strategies/types/jwt-payload.type';
import { NullableType } from '../shared/shared.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService<AllConfigType>,
    private readonly mailService: MailService,
    private readonly sessionService: SessionService,
  ) {}

  async validateLogin(loginDto: AuthLoginDTO) {
    const user = await this.userService.getByEmail(loginDto.email);

    if (!user || user.provider !== AuthProviderEnum.EMAIL || !user.password) {
      throw new UnauthorizedException('invalidCredentials');
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('invalidCredentials');
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const session = await this.sessionService.create({
      userId: user.id,
      hash,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: user.id,
      role: user.role,
      sessionId: session.id,
      hash,
    });

    return {
      refreshToken,
      token,
      tokenExpires,
      user: toUserDTO(user),
    };
  }

  async register(dto: AuthRegisterDTO) {
    const user = await this.userService.create({
      ...dto,
      provider: AuthProviderEnum.EMAIL,
      role: RoleEnum.user,
      status: StatusEnum.inactive,
    });

    const hash = await this.jwtService.signAsync(
      {
        confirmEmailUserId: user.id,
      },
      {
        secret: this.configService.getOrThrow('auth.confirmEmailSecret', {
          infer: true,
        }),
        expiresIn: this.configService.getOrThrow('auth.confirmEmailExpires', {
          infer: true,
        }),
      },
    );

    await this.mailService.userSignUp({
      to: dto.email,
      data: {
        hash,
      },
    });
  }

  async confirmEmail(hash: string): Promise<void> {
    let userId: User['id'];

    try {
      const jwtData = await this.jwtService.verifyAsync<{
        confirmEmailUserId: User['id'];
      }>(hash, {
        secret: this.configService.getOrThrow('auth.confirmEmailSecret', {
          infer: true,
        }),
      });

      userId = jwtData.confirmEmailUserId;
    } catch {
      throw new BadRequestException('invalidHash');
    }

    const user = await this.userService.getById(userId);

    if (!user || user?.status?.toString() !== StatusEnum.inactive.toString()) {
      throw new NotFoundException('notFound');
    }

    user.status = StatusEnum.active;

    await this.userService.update(user.id, user);
  }

  async me(userJwtPayload: JwtPayloadType) {
    const user = await this.userService.getById(userJwtPayload.id);
    if (!user) {
      throw new NotFoundException('userNotFound');
    }
    return toUserDTO(user);
  }

  async refreshToken(
    data: Pick<JwtRefreshPayloadType, 'sessionId' | 'hash'>,
  ): Promise<LoginResponseDTO> {
    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const session = await this.sessionService.updateByHash(
      {
        id: data.sessionId,
        hash: data.hash,
      },
      { hash },
    );

    if (!session) {
      throw new UnauthorizedException('invalidSession');
    }

    const user = await this.userService.getById(session.userId);

    if (!user?.role) {
      throw new UnauthorizedException('invalidSession');
    }

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: session.userId,
      role: user.role,
      sessionId: session.id,
      hash,
    });

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }

  async logout(data: Pick<JwtRefreshPayloadType, 'sessionId'>) {
    return this.sessionService.deleteBydId(data.sessionId);
  }

  private async getTokensData(data: {
    id: User['id'];
    role: User['role'];
    sessionId: Session['id'];
    hash: Session['hash'];
  }) {
    const tokenExpiresIn = this.configService.getOrThrow('auth.expires', {
      infer: true,
    });

    const tokenExpires = Date.now() + ms(tokenExpiresIn);

    const [token, refreshToken] = await Promise.all([
      await this.jwtService.signAsync(
        {
          id: data.id,
          role: data.role,
          sessionId: data.sessionId,
        },
        {
          secret: this.configService.getOrThrow('auth.secret', {
            infer: true,
          }),
        },
      ),
      await this.jwtService.signAsync(
        {
          sessionId: data.sessionId,
          hash: data.hash,
        },
        {
          secret: this.configService.getOrThrow('auth.refreshSecret', {
            infer: true,
          }),
          expiresIn: this.configService.getOrThrow('auth.refreshExpires', {
            infer: true,
          }),
        },
      ),
    ]);

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }
}
