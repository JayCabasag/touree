import { Injectable } from '@nestjs/common';
import { Prisma, Session } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './session.schema';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateSessionDto): Promise<Session> {
    return this.prisma.session.create({
      data: data as Prisma.SessionUncheckedCreateInput,
    });
  }

  updateByHash(
    conditions: { id: Session['id']; hash: Session['hash'] },
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    return this.prisma.session.update({
      where: conditions,
      data: payload,
    });
  }

  deleteBydId(id: Session['id']) {
    return this.prisma.session.delete({
      where: { id },
    });
  }
}
