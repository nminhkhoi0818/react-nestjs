import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const accessToken = await this.authService.validateUser(username, password);
    return { accessToken };
  }

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    console.log(username, password);

    await this.authService.registerUser(username, password);
    return { message: 'User registered successfully' };
  }
}
