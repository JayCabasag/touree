import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { QuoteRequestsModule } from './modules/quote-requests/quote-requests.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    AuthModule,
    BookingsModule,
    BookingsModule,
    QuoteRequestsModule,
    UsersModule,
  ],
})
export class AppModule {}
