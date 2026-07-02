import { Module } from '@nestjs/common';
import { TourPackageService } from './tour-package.service';
import { TourPackageController } from './tour-package.controller';

@Module({
  providers: [TourPackageService],
  controllers: [TourPackageController],
})
export class TourPackageModule {}
