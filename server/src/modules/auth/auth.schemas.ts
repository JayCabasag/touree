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

export const authConfirmEmailSchema = z.object({
  hash: z.string().min(1, { message: 'hash is required' }),
});

export class AuthConfirmEmailDTO extends createZodDto(authConfirmEmailSchema) {}

export const refreshTokenResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  tokenExpires: z.number(),
});

export class RefreshResponseDto extends createZodDto(
  refreshTokenResponseSchema,
) {}

export const loginResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  tokenExpires: z.number(),
});

export class LoginResponseDTO extends createZodDto(loginResponseSchema) {}
