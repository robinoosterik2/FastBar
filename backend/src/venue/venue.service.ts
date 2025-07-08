import { Injectable } from '@nestjs/common';
import { _CreateVenueDto } from './dto/create-venue.dto';
import { _UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './entities/venue.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VenueService {
  constructor(
    @InjectRepository(Venue)
    private venueRepository: Repository<Venue>,
  ) {}

  create(_createVenueDto: _CreateVenueDto) {
    return 'This action adds a new venue';
  }

  findAll() {
    const venues = this.venueRepository.find();
    return venues;
  }

  findOne(id: number) {
    return `This action returns a #${id} venue`;
  }

  update(id: number, _updateVenueDto: _UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  remove(id: number) {
    return `This action removes a #${id} venue`;
  }
}
