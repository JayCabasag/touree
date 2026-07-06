import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Multer } from 'multer';
import * as streamifier from 'streamifier';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { FileResponseDto } from './cloudinary.schema';

@Injectable()
export class CloudinaryService {
  constructor(private readonly prisma: PrismaService) {}
  async create(file: Multer.File): Promise<FileResponseDto> {
    if (!file) {
      throw new BadRequestException('No file');
    }

    const uploadResult = await this.uploadToCloudinary(file);

    return {
      id: uploadResult.public_id,
      path: uploadResult.secure_url,
    } as FileResponseDto;
  }

  private uploadToCloudinary(file: Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'uploads',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            return reject(new BadRequestException('Failed uploading!'));
          }
          if (!result) {
            return reject(new BadRequestException('Failed uploading!'));
          }
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async remove(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
