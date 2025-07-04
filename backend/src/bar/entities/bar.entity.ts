import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Venue } from 'src/venue/entities/venue.entity';
import type { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import type { Order } from 'src/order/entities/order.entity';

@Entity()
export class Bar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'json', nullable: true })
  operatingHours: JSON;

  @Column({ nullable: true })
  averagePreparationTime: number;

  @OneToMany('ProductToBar', (productToBar: ProductToBar) => productToBar.bar)
  productToBars: ProductToBar[];

  @OneToMany('Order', (order: Order) => order.bar)
  orders: Order[];

  @ManyToOne('Venue', (venue: Venue) => venue.bars)
  venue: Venue;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
