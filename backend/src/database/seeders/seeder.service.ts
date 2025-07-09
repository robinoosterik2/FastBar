import { Injectable } from '@nestjs/common';
import { UserSeeder } from './user.seeder';
import { RoleSeeder } from './role.seeder';
import { VenueSeeder } from './venue.seeder';
import { VenueTagSeeder } from './venueTags.seeder';
import { CategorySeeder } from './category.seeder';
import { CategoryTagSeeder } from './categoryTags.seeder';
import { AddressSeeder } from './address.seeder';
import { ProductSeeder } from './product.seeder';
import { BarSeeder } from './bar.seeder';

import { OrderSeeder } from './order.seeder';
import { ProductToBarSeeder } from './product-to-bar.seeder';

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
    private readonly productSeeder: ProductSeeder,
    private readonly barSeeder: BarSeeder,
    private readonly orderSeeder: OrderSeeder,
    private readonly productToBarSeeder: ProductToBarSeeder,
  ) {}

  async seed(
    users: number,
    venueTags: number,
    venues: number,
    categories: number,
    categoryTags: number,
    addresses: number,
    products: number,
    bars: number,
    orders: number,
    productToBars: number,
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
    await this.productSeeder.seed(products);
    await this.barSeeder.seed(bars);
    //    await this.orderSeeder.seed(orders);
//    await this.productToBarSeeder.seed(productToBars);

    console.log('Seeding completed');
  }
}
