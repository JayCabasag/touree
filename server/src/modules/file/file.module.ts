import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { CloudinaryModule } from './infrastructure/uploader/cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  providers: [FileService],
})
export class FileModule {}
