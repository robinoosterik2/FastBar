import { PartialType } from '@nestjs/swagger';
import { _CreateVenueDto } from './create-venue.dto';

export class _UpdateVenueDto extends PartialType(_CreateVenueDto) {}
