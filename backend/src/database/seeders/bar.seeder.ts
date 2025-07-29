import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bar } from 'src/bar/entities/bar.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Venue } from 'src/venue/entities/venue.entity';
import { generateOperatingHours } from './utils/generateOperatingHours';

@Injectable()
export class BarSeeder {
  constructor(
    @InjectRepository(Bar)
    private readonly barRepository: Repository<Bar>,
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} bars...`);

    const venues = await this.venueRepository.find();

    const bars: Bar[] = [];
    for (let i = 0; i < amount; i++) {
      const bar = this.barRepository.create({
        name: faker.company.name() + ' Bar',
        operatingHours: generateOperatingHours(),
        averagePreparationTime: faker.number.int({ min: 1, max: 10 }),
        venue: faker.helpers.arrayElement(venues),
      });
      bars.push(bar);
    }
    await this.barRepository.save(bars);
    console.log(`Seeded ${bars.length} bars`);
  }
}
