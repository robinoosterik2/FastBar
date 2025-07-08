import { Column, Entity, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Bar } from 'src/bar/entities/bar.entity';
import { Address } from 'src/address/entities/address.entity';
import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import { Category } from 'src/category/entities/category.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class Venue extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  logo: string;

  @ManyToMany(() => VenueTag, (venueTag: VenueTag) => venueTag.venues)
  @JoinTable()
  venueTags: VenueTag[];

  @OneToMany(() => CategoryTag, (categoryTag: CategoryTag) => categoryTag.venue)
  categoryTags: CategoryTag[];

  @ManyToMany(() => Category, (category: Category) => category.venues)
  categories: Category[];

  @OneToMany(() => Bar, (bar: Bar) => bar.venue)
  bars: Bar[];

  @OneToMany(() => Address, (address: Address) => address.venue)
  addresses: Address[];

  @Column('json', { nullable: true })
  operatingHours: string;

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  isOpen: boolean;

  // If true, the venue can be found by users via the app
  @Column({ default: true })
  isPublic: boolean;

  // If true the venue is searchable on the landing page
  @Column({ default: true })
  isSearchable: boolean;
}
