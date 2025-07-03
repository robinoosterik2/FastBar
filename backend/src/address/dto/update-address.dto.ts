import { PartialType } from '@nestjs/swagger';
import { _CreateAddressDto } from './create-address.dto';

export class _UpdateAddressDto extends PartialType(_CreateAddressDto) {}
