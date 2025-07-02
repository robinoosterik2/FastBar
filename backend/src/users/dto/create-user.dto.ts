import { IsEmail, IsDate } from 'class-validator';
import { Role } from 'src/roles/roles.enum';

export class CreateUserDto {
  firstName: string;

  lastName: string;

  @IsEmail()
  email: string;

  hashedPassword: string;

  role?: Role;

  @IsDate()
  dateOfBirth: Date;
}
