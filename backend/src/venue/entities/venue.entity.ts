import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bar } from 'src/bar/entities/bar.entity';
import { Address } from 'src/address/entities/address.entity';
import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';

@Entity()
export class Venue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  province: string;

  @Column({ nullable: false })
  postalCode: string;

  @Column({ nullable: false })
  country: string;

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

  @OneToMany(() => VenueTag, (venueTag) => venueTag.venues)
  venueTags: VenueTag[];

  @ManyToOne(() => CategoryTag, (categoryTag) => categoryTag.venue)
  categoryTags: CategoryTag[];

  @OneToMany(() => Bar, (bar) => bar.venue)
  bars: Bar[];

  @OneToMany(() => Address, (address) => address.venue)
  addresses: Address[];

  @Column('json', { nullable: true })
  operatingHours: any;

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  isOpen: boolean;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;
}
