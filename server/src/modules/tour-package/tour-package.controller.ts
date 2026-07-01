import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UsePipes,
} from '@nestjs/common';
import { TourPackageService } from './tour-package.service';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';
import {
  CreateTourPackageDTO,
  createTourPackageSchema,
  GetTourPackagesQueryDTO,
  getTourPackagesQuerySchema,
  TourPackgeDTO,
} from './tour-packge.schemas';
import { getPage } from '../shared/pagination';
import { toTourPackageDTO } from './tour-package.mapper';

@Controller('tour-package')
export class TourPackageController {
  constructor(private readonly service: TourPackageService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createTourPackageSchema))
  async createTourPackage(
    @Body() data: CreateTourPackageDTO,
  ): Promise<TourPackgeDTO> {
    return toTourPackageDTO(await this.service.create(data));
  }

  @Get()
  @UsePipes(new ZodValidationPipe(getTourPackagesQuerySchema))
  async getTourPackages(
    @Query() query: GetTourPackagesQueryDTO,
  ): Promise<TourPackgeDTO[]> {
    const page = getPage(query.page);
    const filters = { name: query.name };
    const { data } = await this.service.get({ page, filters });
    return data.map(toTourPackageDTO);
  }
}
