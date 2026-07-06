import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { AllConfigType } from '../../../../config/config.type';

export const CLOUDINARY = 'CLOUDINARY';

export const CloudinaryProvider: Provider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: (configService: ConfigService<AllConfigType>) => {
    return cloudinary.config({
      cloud_name: configService.get('cloudinary.cloudName', { infer: true }),
      api_key: configService.get('cloudinary.apiKey', { infer: true }),
      api_secret: configService.get('cloudinary.apiSecret', { infer: true }),
    });
  },
};
