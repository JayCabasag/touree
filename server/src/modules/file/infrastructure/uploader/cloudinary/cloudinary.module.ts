import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

import { CloudinaryService } from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';
import cloudinaryConfig from '../../../../config/cloudinary.config';
import { AllConfigType } from '../../../../config/config.type';

export const CLOUDINARY = 'CLOUDINARY';

@Module({
  imports: [ConfigModule.forFeature(cloudinaryConfig)],
  controllers: [CloudinaryController],
  providers: [
    CloudinaryService,
    {
      provide: CLOUDINARY,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<AllConfigType>) => {
        return cloudinary.config({
          cloud_name: configService.get('cloudinary.cloudName', {
            infer: true,
          }),
          api_key: configService.get('cloudinary.apiKey', {
            infer: true,
          }),
          api_secret: configService.get('cloudinary.apiSecret', {
            infer: true,
          }),
        });
      },
    },
  ],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
