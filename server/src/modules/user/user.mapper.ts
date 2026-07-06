import { User } from '@prisma/client';
import { UserDTO } from './user.schemas';

export function toUserDTO(user: User): UserDTO {
  const { createdAt, updatedAt } = user;
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    photo: user.photo,
    role: user.role,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt?.toISOString() ?? null,
  } as UserDTO;
}
