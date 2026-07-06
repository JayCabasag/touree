import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage, Multer } from 'multer';
import { CloudinaryService } from './cloudinary.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller({
  path: 'file',
})
export class CloudinaryController {
  constructor(private readonly fileService: CloudinaryService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('/upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024, // 10mb
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Multer.File) {
    return this.fileService.create(file);
  }
}
