/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsDate } from 'class-validator';
import { Role } from 'src/roles/roles.enum';

export class RegisterUserDto {
  firstName: string;

  lastName: string;

  @IsEmail()
  email: string;

  password: string;

  role?: Role;

  @IsDate()
  dateOfBirth: Date;
}
