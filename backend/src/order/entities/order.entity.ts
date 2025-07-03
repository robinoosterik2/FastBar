import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Bar } from 'src/bar/entities/bar.entity';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  taxAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  tipAmount: number;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];

  @ManyToOne(() => Bar, (bar) => bar.orders)
  bar: Bar;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];
}
