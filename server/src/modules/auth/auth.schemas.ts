import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export enum AuthProviderEnum {
  EMAIL = 'email',
  GOOGLE = 'google',
}

const emailSchema = z.email({
  message: 'Invalid email address',
});

const passwordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' });

export const authRegisterSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required' })
    .max(100),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .max(100),
});

export class AuthRegisterDTO extends createZodDto(authRegisterSchema) {}

export const authLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: 'Password is required' }),
});

export class AuthLoginDTO extends createZodDto(authLoginSchema) {}

export const authConfirmEmailSchema = z.object({
  hash: z.string().min(1, { message: 'Hash is required' }),
});

export class AuthConfirmEmailDTO extends createZodDto(authConfirmEmailSchema) {}

export const tokenResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  tokenExpires: z.number().int().positive(),
});

export class RefreshResponseDto extends createZodDto(tokenResponseSchema) {}

export class LoginResponseDTO extends createZodDto(tokenResponseSchema) {}
