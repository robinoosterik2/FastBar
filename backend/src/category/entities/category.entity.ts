import {
  Entity,
  Column,
  ManyToMany,
} from 'typeorm';
import type { Product } from 'src/product/entities/product.entity';
import type { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import type { Venue } from 'src/venue/entities/venue.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  isActive: boolean;

  @ManyToMany('Venue', (venue: Venue) => venue.categories)
  venues: Venue[];

  @ManyToMany(
    'CategoryTag',
    (categoryTag: CategoryTag) => categoryTag.categories,
  )
  categoryTags: CategoryTag[];

  @ManyToMany('Category', (category: Category) => category.parentCategories)
  parentCategories: Category[];

  @ManyToMany('Category', (category: Category) => category.childCategories)
  childCategories: Category[];

  @ManyToMany('Product', (product: Product) => product.category)
  products: Product[];
}
