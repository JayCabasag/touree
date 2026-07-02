import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { Serialized } from '../shared/shared.types';
import { User } from '../../generated/prisma/client';

export enum RoleEnum {
  admin = 1,
  user = 2,
  coordinator = 3,
}

export enum StatusEnum {
  active = 1,
  inactive = 2,
}

export const createUserSchema = z.object({
  email: z.email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password must be at most 72 characters')
    .regex(/[a-z]/, 'Password must contain a lowercase letter')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[0-9]/, 'Password must contain a number')
    .optional(),
  firstName: z.string().trim().min(1, 'First name is required').max(50),
  lastName: z.string().trim().min(1, 'Last name is required').max(50),
  provider: z.string().trim().optional(),
  socialId: z.string().optional(),
  photo: z.url('Photo must be a valid URL').optional(),
  role: z.enum(RoleEnum).default(RoleEnum.user),
  status: z.enum(StatusEnum).default(StatusEnum.inactive),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}

export type UserDTO = Serialized<
  Omit<User, 'password' | 'provider' | 'socialId' | 'role' | 'status'>
>;
