import { Controller, Get } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  getBooking() {
    return {};
  }
}
