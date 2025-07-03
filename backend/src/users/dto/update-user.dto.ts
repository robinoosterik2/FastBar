import { RegisterUserDto } from './register-user.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateUserDto extends OmitType(RegisterUserDto, [
  'password',
  'dateOfBirth',
]) {}
