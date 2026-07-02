import ms from 'ms';

export type AuthConfig = {
  secret?: string;
  expires?: ms.StringValue;
  refreshSecret?: string;
  refreshExpires?: ms.StringValue;
  forgotSecret?: string;
  forgotExpires?: ms.StringValue;
  confirmEmailSecret?: string;
  confirmEmailExpires?: ms.StringValue;
};

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export type AppConfig = {
  nodeEnv: Environment;
  name: string;
  workingDirectory: string;
  frontendDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
};

export type MailConfig = {
  port: number;
  host?: string;
  user?: string;
  password?: string;
  defaultEmail?: string;
  defaultName?: string;
  ignoreTLS: boolean;
  secure: boolean;
  requireTLS: boolean;
};

export type AllConfigType = {
  auth: AuthConfig;
  app: AppConfig;
  mail: MailConfig;
};
