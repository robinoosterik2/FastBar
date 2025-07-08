import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { faker } from '@faker-js/faker';
import { AddressType } from 'src/address/entities/address.entity';

@Injectable()
export class AddressSeeder {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} addresses...`);
    const addresses: Address[] = [];
    for (let i = 0; i < amount; i++) {
      const address = this.addressRepository.create({
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        province: faker.location.state(),
        postalCode: faker.location.zipCode(),
        country: faker.location.country(),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        type: faker.helpers.arrayElement([
          AddressType.home,
          AddressType.work,
          AddressType.billing,
          AddressType.shipping,
          AddressType.venue,
        ]),
        isDefault: faker.datatype.boolean(),
      });
      addresses.push(address);
    }
    await this.addressRepository.save(addresses);
    console.log(`Seeded ${addresses.length} addresses`);
  }
}
