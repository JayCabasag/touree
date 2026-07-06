import { registerAs } from '@nestjs/config';
import { z } from 'zod';
import { GoogleConfig } from './config.type';

const environmentVariablesSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
});

export default registerAs<GoogleConfig>('google', () => {
  const parsed = environmentVariablesSchema.safeParse(process.env);

  if (!parsed.success) {
    throw new Error(
      `Google config validation error: ${parsed.error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join(', ')}`,
    );
  }

  return {
    clientId: parsed.data.GOOGLE_CLIENT_ID,
    clientSecret: parsed.data.GOOGLE_CLIENT_SECRET,
  };
});
