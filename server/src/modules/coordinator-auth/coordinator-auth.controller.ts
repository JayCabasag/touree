import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthLoginDTO, AuthRegisterDTO } from '../auth/auth.schemas';
import { AuthService } from '../auth/auth.service';
import { RoleEnum } from '../user/user.schemas';

@Controller({
  path: 'auth/coordinator',
})
export class CoordinatorAuthController {
  constructor(private readonly service: AuthService) {}

  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() registerDto: AuthRegisterDTO): Promise<void> {
    return this.service.register(registerDto, RoleEnum.coordinator);
  }

  @Post('email/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthLoginDTO) {
    return this.service.validateLogin(loginDto, RoleEnum.coordinator);
  }
}
