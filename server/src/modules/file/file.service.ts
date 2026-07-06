import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './infrastructure/uploader/cloudinary/cloudinary.service';
import { PrismaService } from '../prisma/prisma.service';
import { Multer } from 'multer';

@Injectable()
export class FileService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly prisma: PrismaService,
  ) {}

  async uploadAndSave(file: Multer.File) {
    const uploaded = await this.cloudinaryService.create(file);

    const savedFile = await this.prisma.file.create({
      data: {
        url: uploaded.path,
        cloudinaryPublicId: uploaded.id,
      },
    });

    return {
      id: savedFile.id,
      path: savedFile.url,
    };
  }

  async remove(fileId: string) {
    const file = await this.prisma.file.findUniqueOrThrow({
      where: { cloudinaryPublicId: fileId },
    });
    await this.cloudinaryService.remove(file.cloudinaryPublicId);
    await this.prisma.file.delete({ where: { cloudinaryPublicId: fileId } });
  }
}
