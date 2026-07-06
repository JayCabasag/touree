import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';
import { QuoteRequestModule } from './modules/quote-request/quote-request.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TourPackageModule } from './modules/tour-package/tour-package.module';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';
import { AuthGoogleModule } from './modules/auth-google/auth-google.module';
import { MailModule } from './modules/mail/mail.module';
import { MailerModule } from './modules/mailer/mailer.module';
import { SessionModule } from './modules/session/session.module';
import { CoordinatorAuthModule } from './modules/coordinator-auth/coordinator-auth.module';
import { CoordinatorAuthGoogleModule } from './modules/coordinator-auth-google/coordinator-auth-google.module';
import { FileModule } from './modules/file/file.module';

import { APP_PIPE } from '@nestjs/core';
import authConfig from './modules/config/auth.config';
import appConfig from './modules/config/app.config';
import mailConfig from './modules/config/mail.config';
import googleConfig from './modules/config/google.config';
import cloudinaryConfig from './modules/config/cloudinary.config';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    BookingModule,
    // QuoteRequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig, appConfig, mailConfig, googleConfig],
    }),
    TourPackageModule,
    AuthGoogleModule,
    MailModule,
    MailerModule,
    SessionModule,
    CoordinatorAuthModule,
    CoordinatorAuthGoogleModule,
    FileModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
