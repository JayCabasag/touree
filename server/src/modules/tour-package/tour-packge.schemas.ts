import z from 'zod';
import { Serialized } from '../shared/shared.types';
import { TourPackage } from '../../generated/prisma/client';
import { createZodDto } from 'nestjs-zod';

export const createTourPackageSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type CreateTourPackage = z.infer<typeof createTourPackageSchema>;

export class CreateTourPackageDTO extends createZodDto(
  createTourPackageSchema,
) {}

export const getTourPackagesQuerySchema = z.object({
  name: z.string().optional(),
  page: z.coerce.number().int().nonnegative().optional(),
});

export type GetTourPackagesQuery = z.infer<typeof getTourPackagesQuerySchema>;

export class GetTourPackagesQueryDTO extends createZodDto(
  getTourPackagesQuerySchema,
) {}

export type TourPackgeDTO = Serialized<TourPackage>;
