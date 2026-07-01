import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: z.ZodType) {}

  transform(value: unknown) {
    const result = this.schema.safeParse(value);

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
