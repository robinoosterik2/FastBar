import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  register(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<{ access_token: string }> {
    return this.authService.register(registerUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    return this.authService.signIn(loginUserDto);
  }
}
