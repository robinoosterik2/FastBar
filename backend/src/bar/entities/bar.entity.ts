import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Venue } from 'src/venue/entities/venue.entity';
import { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class Bar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => Venue, (venue) => venue.bars)
  venue: Venue;

  @OneToMany(() => ProductToBar, (productToBar) => productToBar.bar)
  productToBars: ProductToBar[];

  @OneToMany(() => Order, (order) => order.bar, { lazy: true })
  orders: Promise<Order[]>;
}
