import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AuthGoogleService } from './auth-google.service';
import { authGoogleLoginDTO } from './auth-google.schemas';

@Controller({
  path: 'auth/google',
  version: '1',
})
export class AuthGoogleController {
  constructor(
    private readonly authService: AuthService,
    private readonly authGoogleService: AuthGoogleService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: authGoogleLoginDTO) {
    const socialData = await this.authGoogleService.getProfileByToken(loginDto);
    return this.authService.validateSocialLogin('google', socialData);
  }
}
