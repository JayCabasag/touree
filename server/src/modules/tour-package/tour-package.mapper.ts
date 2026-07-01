import { TourPackage } from '../../generated/prisma/client';
import { TourPackgeDTO } from './tour-packge.schemas';

export function toTourPackageDTO(tourPackage: TourPackage): TourPackgeDTO {
  const { createdAt, updatedAt, ...rest } = tourPackage;
  return {
    ...rest,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}
