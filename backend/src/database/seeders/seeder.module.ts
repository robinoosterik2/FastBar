import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { SeederService } from './seeder.service';
import { Settings } from 'src/users/entities/settings.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserSeeder } from './user.seeder';
import { RoleSeeder } from './role.seeder';
import { VenueSeeder } from './venue.seeder';
import { VenueTagSeeder } from './venueTags.seeder';
import { CategoryTagSeeder } from './categoryTags.seeder';
import { CategorySeeder } from './category.seeder';
import { Category } from 'src/category/entities/category.entity';
import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import { Venue } from 'src/venue/entities/venue.entity';
import { Address } from 'src/address/entities/address.entity';
import { AddressSeeder } from './address.seeder';
import { Bar } from 'src/bar/entities/bar.entity';
import { Order } from 'src/order/entities/order.entity';
import { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import { BarSeeder } from './bar.seeder';
import { OrderSeeder } from './order.seeder';
import { ProductToBarSeeder } from './product-to-bar.seeder';
import { Product } from 'src/product/entities/product.entity';
import { ProductSeeder } from './product.seeder';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Settings,
      Role,
      Category,
      Venue,
      VenueTag,
      CategoryTag,
      Address,
      Bar,
      Order,
      ProductToBar,
      Product,
      OrderProduct,
    ]),
  ],
  providers: [
    SeederService,
    UserSeeder,
    RoleSeeder,
    VenueSeeder,
    VenueTagSeeder,
    CategorySeeder,
    CategoryTagSeeder,
    AddressSeeder,
    BarSeeder,
    OrderSeeder,
    ProductToBarSeeder,
    ProductSeeder,
  ],
  exports: [SeederService],
})
export class SeederModule {}
