import { IsEmail, IsDate } from 'class-validator';
import { Role } from 'src/roles/roles.enum';
import { IsString } from 'class-validator';
import { ToLowerCase } from 'src/common/utils/normalize';

export class CreateUserDto {
  @ToLowerCase()
  @IsString()
  firstName: string;

  @ToLowerCase()
  @IsString()
  lastName: string;

  @IsEmail()
  @ToLowerCase()
  email: string;

  hashedPassword: string;

  role?: Role;

  @IsDate()
  dateOfBirth: Date;
}
