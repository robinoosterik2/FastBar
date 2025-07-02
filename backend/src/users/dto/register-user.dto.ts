import {
  IsEmail,
  IsDateString,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Role } from 'src/roles/roles.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ToLowerCase } from 'src/common/utils/normalize';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @ToLowerCase()
  @ApiProperty({ required: true })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ToLowerCase()
  @ApiProperty({ required: true })
  lastName: string;

  @IsEmail()
  @ToLowerCase()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;

  @IsOptional()
  @ApiProperty({ required: false })
  role?: Role;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: '1990-01-01' })
  dateOfBirth: string;
}
