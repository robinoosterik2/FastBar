import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Bar } from 'src/bar/entities/bar.entity';
import type { Address } from 'src/address/entities/address.entity';
import type { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import type { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import type { Category } from 'src/category/entities/category.entity';

@Entity()
export class Venue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToMany('VenueTag', (venueTag: VenueTag) => venueTag.venues)
  venueTags: VenueTag[];

  @OneToMany('CategoryTag', (categoryTag: CategoryTag) => categoryTag.venue)
  categoryTags: CategoryTag[];

  @OneToMany('Category', (category: Category) => category.venue)
  categories: Category[];

  @OneToMany('Bar', (bar: Bar) => bar.venue)
  bars: Bar[];

  @OneToMany('Address', (address: Address) => address.venue)
  addresses: Address[];

  @Column('json', { nullable: true })
  operatingHours: any;

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  isOpen: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
