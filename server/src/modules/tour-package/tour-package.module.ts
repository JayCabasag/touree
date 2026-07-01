import { Module } from '@nestjs/common';
import { TourPackageService } from './tour-package.service';
import { TourPackageController } from './tour-package.controller';
import { PrismaService } from '../prisma/prisma.service';
import { TourPackage } from '../../generated/prisma/client';

@Module({
  providers: [TourPackageService],
  controllers: [TourPackageController],
})
export class TourPackageModule {}
