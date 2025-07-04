import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Product } from 'src/product/entities/product.entity';
import type { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import type { Venue } from 'src/venue/entities/venue.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne('Venue', (venue: Venue) => venue.categories)
  venue: Venue;

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
