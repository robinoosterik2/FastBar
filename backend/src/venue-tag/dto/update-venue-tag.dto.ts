import { PartialType } from '@nestjs/swagger';
import { CreateVenueTagDto } from './create-venue-tag.dto';

export class UpdateVenueTagDto extends PartialType(CreateVenueTagDto) {}
