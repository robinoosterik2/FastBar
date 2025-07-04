import type { Category } from 'src/category/entities/category.entity';
import type { Venue } from 'src/venue/entities/venue.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class CategoryTag extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @ManyToOne('Venue', (venue: Venue) => venue.categoryTags)
  venue: Venue;

  @ManyToMany('Category', (category: Category) => category.categoryTags)
  categories: Category[];

  @Column({ nullable: false })
  isActive: boolean;
}
