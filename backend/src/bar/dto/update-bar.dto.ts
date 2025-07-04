import { PartialType } from '@nestjs/swagger';
import { _CreateBarDto } from './create-bar.dto';

export class _UpdateBarDto extends PartialType(_CreateBarDto) {}
