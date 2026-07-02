import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto, RoleEnum, StatusEnum } from './user.schemas';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '../../generated/prisma/client';

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
        throw new BadRequestException('emailAlreadyExists');
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

    const user = await this.prisma.user.create({
      data: data as Prisma.UserUncheckedCreateInput,
    });

    return user;
  }
}
