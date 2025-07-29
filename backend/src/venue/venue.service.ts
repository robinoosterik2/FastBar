import { Injectable } from '@nestjs/common';
import { _CreateVenueDto } from './dto/create-venue.dto';
import { _UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './entities/venue.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetVenuesResponseDto } from './dto/venue-response.dto';
import { GetVenueQueryDto } from './dto/get-venue-query.dto';

@Injectable()
export class VenueService {
  constructor(
    @InjectRepository(Venue)
    private venueRepository: Repository<Venue>,
  ) {}

  create(_createVenueDto: _CreateVenueDto) {
    return 'This action adds a new venue';
  }

  async findAll(query: GetVenueQueryDto): Promise<GetVenuesResponseDto> {
    const { search, page, limit, sortBy, sortOrder } = query;

    const queryBuilder = this.venueRepository
      .createQueryBuilder('venue')
      .leftJoinAndSelect('venue.venueTags', 'venueTag');

    if (search) {
      queryBuilder.andWhere('venue.name ILIKE :search', {
        search: `%${search}%`,
      });
    }

    if (page && limit) {
      queryBuilder.take(limit).skip((page - 1) * limit);
    }

    if (sortBy && sortOrder) {
      queryBuilder.orderBy(`venue.${sortBy}`, sortOrder);
    }

    const [venues, total] = await queryBuilder.getManyAndCount();

    return {
      venues,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
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
