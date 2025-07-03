import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ToLowerCase } from 'src/common/utils/normalize';

export class LoginUserDto {
  @IsEmail()
  @ToLowerCase()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
