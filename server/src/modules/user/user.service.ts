import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto, RoleEnum, StatusEnum } from './user.schemas';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '../../generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    let password: string | undefined = undefined;
    if (data.password) {
      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(data.password, salt);
    }

    let email: string | null = null;
    if (data.email) {
      const userObject = await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (userObject) {
        throw new ConflictException('emailAlreadyExists');
      }
      email = data.email;
    }

    let role: RoleEnum | undefined = undefined;

    if (data.role) {
      const roleObject = Object.values(RoleEnum)
        .map(String)
        .includes(String(data.role));
      if (!roleObject) {
        throw new BadRequestException('roleNotExists');
      }
      role = data.role;
    }

    let status: StatusEnum | undefined = undefined;
    if (data.status) {
      const statusObject = Object.values(StatusEnum)
        .map(String)
        .includes(String(data.status));
      if (!statusObject) {
        throw new BadRequestException('statusNotExists');
      }
      status = data.status;
    }

    return await this.prisma.user.create({
      data: {
        ...data,
        password,
        email,
        role,
        status,
      } as Prisma.UserUncheckedCreateInput,
    });
  }

  async getById(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async getByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, user: User): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: user,
    });
  }
}
