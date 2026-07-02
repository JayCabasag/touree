import { registerAs } from '@nestjs/config';
import { MailConfig } from './config.type';
import z from 'zod';

export const mailConfigSchema = z.object({
  MAIL_PORT: z.coerce.number().int().min(0).max(65535).optional(),
  MAIL_HOST: z.string().min(1),
  MAIL_USER: z.string().optional(),
  MAIL_PASSWORD: z.string().optional(),
  MAIL_DEFAULT_EMAIL: z.email(),
  MAIL_DEFAULT_NAME: z.string().min(1),
  MAIL_IGNORE_TLS: z.coerce.boolean(),
  MAIL_SECURE: z.coerce.boolean(),
  MAIL_REQUIRE_TLS: z.coerce.boolean(),
});

export default registerAs<MailConfig>('mail', () => {
  const env = mailConfigSchema.parse(process.env);
  return {
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 587,
    host: process.env.MAIL_HOST,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    defaultEmail: process.env.MAIL_DEFAULT_EMAIL,
    defaultName: process.env.MAIL_DEFAULT_NAME,
    ignoreTLS: process.env.MAIL_IGNORE_TLS === 'true',
    secure: process.env.MAIL_SECURE === 'true',
    requireTLS: process.env.MAIL_REQUIRE_TLS === 'true',
  };
});
