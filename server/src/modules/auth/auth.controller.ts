import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  AuthConfirmEmailDTO,
  AuthLoginDTO,
  AuthRegisterDTO,
} from './auth.schemas';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('email/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthLoginDTO) {
    return this.service.validateLogin(loginDto);
  }

  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() createUserDto: AuthRegisterDTO): Promise<void> {
    return this.service.register(createUserDto);
  }

  @Post('email/confirm')
  @HttpCode(HttpStatus.NO_CONTENT)
  async confirmNewEmail(
    @Body() confirmEmailDto: AuthConfirmEmailDTO,
  ): Promise<void> {
    return this.service.confirmEmail(confirmEmailDto.hash);
  }
}
