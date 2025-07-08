import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venue } from 'src/venue/entities/venue.entity';
import { faker } from '@faker-js/faker';
import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { Address } from 'src/address/entities/address.entity';

function generateOperatingHours(): string {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const json = {};
  for (const day of days) {
    const start = new Date().setUTCHours(0, 0, 0, 0);
    const end = faker.date.between({
      from: start,
      to: new Date().setUTCHours(23, 59, 59, 999),
    });
    json[day] = {
      open: faker.date.between({
        from: start,
        to: end,
      }),
      close: end,
    };
  }
  return JSON.stringify(json);
}

@Injectable()
export class VenueSeeder {
  constructor(
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
    @InjectRepository(VenueTag)
    private readonly venueTagRepository: Repository<VenueTag>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} venues...`);
    const venueTags = await this.venueTagRepository.find();
    const addresses = await this.addressRepository.find();
    const updatedAddresses: Address[] = [];

    const venues: Venue[] = [];
    for (let i = 0; i < amount; i++) {
      const address = faker.helpers.arrayElement(addresses);
      const venue = this.venueRepository.create({
        name: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        description: faker.lorem.sentence(),
        logo: faker.image.url(),
        operatingHours: generateOperatingHours(),
        isActive: faker.datatype.boolean(),
        isOpen: faker.datatype.boolean(),
        isPublic: faker.datatype.boolean(),
        isSearchable: faker.datatype.boolean(),
        venueTags: faker.helpers.arrayElements(venueTags, { min: 1, max: 10 }),
      });
      address.venue = venue;
      venues.push(venue);
      updatedAddresses.push(address);
    }
    await this.venueRepository.save(venues);
    await this.addressRepository.save(updatedAddresses);
    console.log(`Seeded ${venues.length} venues`);
  }
}
