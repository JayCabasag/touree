import z, { email } from 'zod';
import { createZodDto } from 'nestjs-zod';

export enum AuthProviderEnum {
  EMAIL = 'email',
  GOOGLE = 'google',
}

export const authRegisterSchema = z.object({
  email: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export class AuthRegisterDTO extends createZodDto(authRegisterSchema) {}

export const authLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export class AuthLoginDTO extends createZodDto(authLoginSchema) {}
