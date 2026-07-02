import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    const metatype = metadata.metatype as { schema?: z.ZodType } | undefined;

    if (!metatype?.schema) {
      return value;
    }

    const result = metatype.schema.safeParse(value);

    if (result.success) {
      return result.data;
    }

    const issue = result.error.issues[0];

    throw new BadRequestException(
      issue
        ? `${issue.message}: '${issue.path.join('.')}'`
        : 'Validation failed',
    );
  }
}
