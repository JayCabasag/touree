import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const authGoogleLoginSchema = z.object({
  idToken: z.string().min(1, 'ID Token is required'),
});

export class authGoogleLoginDTO extends createZodDto(authGoogleLoginSchema) {}
