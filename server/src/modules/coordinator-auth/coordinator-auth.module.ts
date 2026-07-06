import { Module } from '@nestjs/common';
import { CoordinatorAuthController } from './coordinator-auth.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CoordinatorAuthController],
})
export class CoordinatorAuthModule {}
