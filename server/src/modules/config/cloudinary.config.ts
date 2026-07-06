import { registerAs } from '@nestjs/config';
import { z } from 'zod';
import { CloudinaryConfig } from './config.type';

const cloudinaryConfigSchema = z.object({
  CLOUDINARY_CLOUD_NAME: z.string().min(1, 'Cloudinary cloud name is required'),
  CLOUDINARY_API_KEY: z.string().min(1, 'Cloudinary API key is required'),
  CLOUDINARY_API_SECRET: z.string().min(1, 'Cloudinary API secret is required'),
});

export default registerAs<CloudinaryConfig>('cloudinary', () => {
  const env = cloudinaryConfigSchema.parse(process.env);

  return {
    cloudName: env.CLOUDINARY_CLOUD_NAME,
    apiKey: env.CLOUDINARY_API_KEY,
    apiSecret: env.CLOUDINARY_API_SECRET,
  };
});
