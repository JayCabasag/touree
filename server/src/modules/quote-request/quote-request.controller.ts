import { Controller, Get } from '@nestjs/common';

@Controller('quote-request')
export class QuoteRequestController {
  @Get()
  getQuote() {
    return {};
  }
}
