import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const createSessionSchema = z.object({
  userId: z.number().int().positive(),
  hash: z.string().min(1),
});

export class CreateSessionDto extends createZodDto(createSessionSchema) {}
