import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import { Venue } from 'src/venue/entities/venue.entity';
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
  @JoinTable()
  venues: Venue[];

  @ManyToMany(
    'CategoryTag',
    (categoryTag: CategoryTag) => categoryTag.categories,
  )
  @JoinTable()
  categoryTags: CategoryTag[];

  @ManyToMany('Category', (category: Category) => category.parentCategories)
  parentCategories: Category[];

  @ManyToMany('Category', (category: Category) => category.childCategories)
  childCategories: Category[];

  @ManyToMany('Product', (product: Product) => product.category)
  @JoinTable()
  products: Product[];
}
