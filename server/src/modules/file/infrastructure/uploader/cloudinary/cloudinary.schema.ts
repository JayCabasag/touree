// src/files/dto/file-response.dto.ts
import { z } from 'zod';

export const fileResponseSchema = z.object({
  id: z.string().min(1, 'File id is required'),
  path: z.url('Path must be a valid URL'),
});

export type FileResponseDto = z.infer<typeof fileResponseSchema>;
