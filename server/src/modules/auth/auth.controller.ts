import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthRegisterDTO } from './auth.schemas';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('email/ogin')
  async login() {
    return { message: 'Login' };
  }

  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() createUserDto: AuthRegisterDTO): Promise<void> {
    return this.service.register(createUserDto);
  }

  @Post('email/confirm-new')
  async configmNewEmail() {
    // return this.service
  }
}
