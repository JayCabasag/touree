import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';
import { QuoteRequestModule } from './modules/quote-request/quote-request.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TourPackageModule } from './modules/tour-package/tour-package.module';

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
    }),
    TourPackageModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
