import { Injectable } from '@nestjs/common';
import { CreateVenueTagDto } from './dto/create-venue-tag.dto';
import { UpdateVenueTagDto } from './dto/update-venue-tag.dto';

@Injectable()
export class VenueTagService {
  create(createVenueTagDto: CreateVenueTagDto) {
    return 'This action adds a new venueTag';
  }

  findAll() {
    return `This action returns all venueTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venueTag`;
  }

  update(id: number, updateVenueTagDto: UpdateVenueTagDto) {
    return `This action updates a #${id} venueTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueTag`;
  }
}
