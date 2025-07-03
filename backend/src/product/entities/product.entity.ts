import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import { Order } from 'src/order/entities/order.entity';
import { Category } from 'src/category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: false, default: 18 })
  ageRestriction: number;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;

  @OneToMany(() => ProductToBar, (productToBar) => productToBar.product)
  productToBars: ProductToBar[];

  @ManyToMany(() => Category, (category) => category.products)
  category: Category[];
}
