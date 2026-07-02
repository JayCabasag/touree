import { registerAs } from '@nestjs/config';
import { z } from 'zod';
import { AppConfig, Environment } from './config.type';

const appConfigSchema = z.object({
  NODE_ENV: z.enum(Environment).optional(),
  APP_PORT: z.coerce.number().int().min(0).max(65535).optional(),
  FRONTEND_DOMAIN: z.url().optional(),
  BACKEND_DOMAIN: z.url().optional(),
  API_PREFIX: z.string().optional(),
  APP_NAME: z.string().optional(),
  PORT: z.coerce.number().int().min(0).max(65535).optional(),
  PWD: z.string().optional(),
});

export default registerAs<AppConfig>('app', () => {
  const env = appConfigSchema.parse(process.env);

  return {
    nodeEnv: env.NODE_ENV ?? Environment.Development,
    name: env.APP_NAME ?? 'app',
    workingDirectory: env.PWD ?? process.cwd(),
    frontendDomain: env.FRONTEND_DOMAIN,
    backendDomain: env.BACKEND_DOMAIN ?? 'http://localhost',
    port: env.APP_PORT ?? env.PORT ?? 3000,
    apiPrefix: env.API_PREFIX ?? 'api',
  };
});
