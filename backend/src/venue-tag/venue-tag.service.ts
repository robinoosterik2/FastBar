import { Injectable } from '@nestjs/common';
import { _CreateVenueTagDto } from './dto/create-venue-tag.dto';
import { _UpdateVenueTagDto } from './dto/update-venue-tag.dto';

@Injectable()
export class VenueTagService {
  create(_createVenueTagDto: _CreateVenueTagDto) {
    return 'This action adds a new venueTag';
  }

  findAll() {
    return `This action returns all venueTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venueTag`;
  }

  update(id: number, _updateVenueTagDto: _UpdateVenueTagDto) {
    return `This action updates a #${id} venueTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueTag`;
  }
}
