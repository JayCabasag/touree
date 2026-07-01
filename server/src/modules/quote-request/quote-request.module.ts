import { Module } from '@nestjs/common';
import { QuoteRequestController } from './quote-request.controller';
import { QuoteRequestService } from './quote-request.service';

@Module({
  controllers: [QuoteRequestController],
  providers: [QuoteRequestService]
})
export class QuoteRequestModule {}
