import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { AuthResponse } from 'src/common/interfaces/Auth';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(user: User): Promise<AuthResponse> {
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
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerUserDto: RegisterUserDto): Promise<AuthResponse> {
    const { password, dateOfBirth, ...rest } = registerUserDto;

    const user = await this.usersService.create({
      ...rest,
      dateOfBirth: new Date(dateOfBirth),
      hashedPassword: await this.hashPassword(password),
    });

    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
      status: user.status,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.hashedPassword);

    return isMatch ? user : null;
  }
}
