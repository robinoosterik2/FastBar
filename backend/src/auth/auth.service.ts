import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
      status: user.status,
    };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
      }),
    };
  }

  async register(registerUserDto: RegisterUserDto): Promise<any> {
    const user = await this.usersService.create({
      ...registerUserDto,
      hashedPassword: await this.hashPassword(registerUserDto.password),
    });
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
      status: user.status,
    };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
      }),
    };
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    return isMatch ? user : null;
  }
}
