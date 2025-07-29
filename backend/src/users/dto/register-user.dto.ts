import {
  IsEmail,
  IsDateString,
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ToLowerCase } from 'src/common/utils/normalize';
import { Match } from 'src/common/decorators/match.decorator';

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
  @MinLength(8)
  @MaxLength(30)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  @ApiProperty({ required: true })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Match('password', { message: 'Passwords do not match' })
  @ApiProperty({ required: true })
  confirmPassword: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: '1990-01-01' })
  dateOfBirth: string;
}
