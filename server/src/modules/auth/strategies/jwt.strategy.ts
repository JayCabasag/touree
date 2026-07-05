import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../../config/config.type';
import { JwtPayloadType } from './types/jwt-payload.type';
import { OrNeverType } from '../../shared/shared.types';
import { SessionService } from '../../session/session.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService<AllConfigType>,
    private readonly sessionService: SessionService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.getOrThrow('auth.secret', { infer: true }),
    });
  }

  async validate(payload: JwtPayloadType): Promise<JwtPayloadType> {
    const session = await this.sessionService.getById(payload.sessionId);

    if (!session) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
