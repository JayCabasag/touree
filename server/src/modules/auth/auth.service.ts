import { Injectable } from '@nestjs/common';
import { AuthProviderEnum, AuthRegisterDTO } from './auth.schemas';
import { UserService } from '../user/user.service';
import { RoleEnum, StatusEnum } from '../user/user.schemas';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService<AllConfigType>,
    private readonly mailService: MailService,
  ) {}
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
}
