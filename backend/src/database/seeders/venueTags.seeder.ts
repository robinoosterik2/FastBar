import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class VenueTagSeeder {
  constructor(
    @InjectRepository(VenueTag)
    private readonly venueTagRepository: Repository<VenueTag>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} venue tags...`);

    const venueTags: VenueTag[] = [];
    for (let i = 0; i < amount; i++) {
      const venueTag = this.venueTagRepository.create({
        name: faker.food.adjective(),
        public: faker.datatype.boolean(),
        isActive: faker.datatype.boolean(),
      });
      venueTags.push(venueTag);
    }
    await this.venueTagRepository.save(venueTags);
    console.log(`Seeded ${venueTags.length} venue tags`);
  }
}
