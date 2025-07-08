import { Injectable } from '@nestjs/common';
import { UserSeeder } from './user.seeder';
import { RoleSeeder } from './role.seeder';
import { VenueSeeder } from './venue.seeder';
import { VenueTagSeeder } from './venueTags.seeder';
import { CategorySeeder } from './category.seeder';
import { CategoryTagSeeder } from './categoryTags.seeder';
import { AddressSeeder } from './address.seeder';

@Injectable()
export class SeederService {
  constructor(
    private readonly userSeeder: UserSeeder,
    private readonly roleSeeder: RoleSeeder,
    private readonly venueSeeder: VenueSeeder,
    private readonly venueTagSeeder: VenueTagSeeder,
    private readonly categorySeeder: CategorySeeder,
    private readonly categoryTagSeeder: CategoryTagSeeder,
    private readonly addressSeeder: AddressSeeder,
  ) {}

  async seed(
    users: number,
    venueTags: number,
    venues: number,
    categories: number,
    categoryTags: number,
    addresses: number,
  ): Promise<void> {
    console.log('Seeding started');

    // order is important
    await this.venueTagSeeder.seed(venueTags);
    await this.addressSeeder.seed(addresses);
    await this.venueSeeder.seed(venues);
    await this.categoryTagSeeder.seed(categoryTags);
    await this.categorySeeder.seed(categories);
    await this.roleSeeder.seed();
    await this.userSeeder.seed(users);

    console.log('Seeding completed');
  }
}
