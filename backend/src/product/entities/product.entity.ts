import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import { Order } from 'src/order/entities/order.entity';

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

  @Column({ nullable: false })
  category: string;

  @OneToMany(() => ProductToBar, (productToBar) => productToBar.product)
  productToBars: ProductToBar[];

  @ManyToMany(() => Order, (order) => order.products, { lazy: true })
  orders: Promise<Order[]>;
}
