import { PartialType } from '@nestjs/swagger';
import { _CreateVenueTagDto } from './create-venue-tag.dto';

export class _UpdateVenueTagDto extends PartialType(_CreateVenueTagDto) {}
