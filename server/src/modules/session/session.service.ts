import { Injectable } from '@nestjs/common';
import { Prisma, Session } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './session.schema';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSessionDto): Promise<Session> {
    return await this.prisma.session.create({
      data: data as Prisma.SessionUncheckedCreateInput,
    });
  }
}
