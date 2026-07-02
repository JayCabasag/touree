import { registerAs } from '@nestjs/config';
import { z } from 'zod';
import ms from 'ms';
import { AuthConfig } from '../config/config.type';

const authConfigSchema = z.object({
  AUTH_JWT_SECRET: z.string().min(1),
  AUTH_JWT_TOKEN_EXPIRES_IN: z.string().min(1),

  AUTH_REFRESH_SECRET: z.string().min(1),
  AUTH_REFRESH_TOKEN_EXPIRES_IN: z.string().min(1),

  AUTH_FORGOT_SECRET: z.string().min(1),
  AUTH_FORGOT_TOKEN_EXPIRES_IN: z.string().min(1),

  AUTH_CONFIRM_EMAIL_SECRET: z.string().min(1),
  AUTH_CONFIRM_EMAIL_TOKEN_EXPIRES_IN: z.string().min(1),
});

export default registerAs<AuthConfig>('auth', () => {
  const env = authConfigSchema.parse(process.env);

  return {
    secret: env.AUTH_JWT_SECRET,
    expires: env.AUTH_JWT_TOKEN_EXPIRES_IN as ms.StringValue,

    refreshSecret: env.AUTH_REFRESH_SECRET,
    refreshExpires: env.AUTH_REFRESH_TOKEN_EXPIRES_IN as ms.StringValue,

    forgotSecret: env.AUTH_FORGOT_SECRET,
    forgotExpires: env.AUTH_FORGOT_TOKEN_EXPIRES_IN as ms.StringValue,

    confirmEmailSecret: env.AUTH_CONFIRM_EMAIL_SECRET,
    confirmEmailExpires:
      env.AUTH_CONFIRM_EMAIL_TOKEN_EXPIRES_IN as ms.StringValue,
  };
});
