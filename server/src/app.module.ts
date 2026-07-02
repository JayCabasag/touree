import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';
import { QuoteRequestModule } from './modules/quote-request/quote-request.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TourPackageModule } from './modules/tour-package/tour-package.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';
import { AuthGoogleModule } from './modules/auth-google/auth-google.module';
import { MailModule } from './modules/mail/mail.module';
import authConfig from './modules/auth/auth.config';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    BookingModule,
    QuoteRequestModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig],
    }),
    TourPackageModule,
    AuthGoogleModule,
    MailModule,
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
