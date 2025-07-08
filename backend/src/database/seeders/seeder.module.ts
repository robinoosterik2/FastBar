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
  ],
  exports: [SeederService],
})
export class SeederModule {}
