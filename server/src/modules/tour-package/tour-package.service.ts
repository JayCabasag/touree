import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TourPackage } from '@prisma/client';
import { Filters, Page, PaginatedData } from '../shared/shared.types';
import { queryParameters } from '../shared/pagination';
import { CreateTourPackageDTO } from './tour-package.schemas';

@Injectable()
export class TourPackageService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTourPackageDTO): Promise<TourPackage> {
    return await this.prisma.tourPackage.create({
      data: data as Prisma.TourPackageUncheckedCreateInput,
    });
  }

  async getById(id: number): Promise<TourPackage | null> {
    return await this.prisma.tourPackage.findUnique({ where: { id } });
  }

  async get(parameters: {
    page: Page;
    filters: Filters;
  }): Promise<PaginatedData<TourPackage>> {
    const { page, filters } = parameters;
    const whereFilter = this.buildWhereFilter(filters);
    const databaseQueryParameters = queryParameters({ page, whereFilter });

    const tourPackges = await this.prisma.tourPackage.findMany({
      ...databaseQueryParameters,
      orderBy: { id: 'asc' },
      include: {
        images: true,
      },
    });

    return { data: tourPackges };
  }

  private buildWhereFilter(filters: Filters): Prisma.TourPackageWhereInput {
    const where: Prisma.TourPackageWhereInput = {};

    if (filters.name) {
      where.name = {
        contains: filters.name.trim(),
      };
    }

    return where;
  }
}
