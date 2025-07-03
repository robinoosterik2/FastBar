import { Entity, Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;

  @ManyToMany(() => CategoryTag, (categoryTag) => categoryTag.categories)
  categoryTags: CategoryTag[];

  @ManyToMany(() => Category, (category) => category.parentCategories)
  parentCategories: Category[];

  @ManyToMany(() => Category, (category) => category.childCategories)
  childCategories: Category[];

  @ManyToMany(() => Product, (product) => product.category)
  products: Product[];
}
