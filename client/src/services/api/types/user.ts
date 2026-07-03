import { RoleEnum } from "./role";

export enum UserProviderEnum {
  EMAIL = "email",
  GOOGLE = "google",
}

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
  provider?: UserProviderEnum;
  socialId?: string;
  role?: RoleEnum;
};
