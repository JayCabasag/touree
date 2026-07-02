import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { SessionModule } from '../session/session.module';

@Module({
  imports: [UserModule, JwtModule, MailModule, SessionModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
