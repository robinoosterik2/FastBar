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

  @Column({ nullable: false })
  operatingHours: string;

  @Column({ nullable: false })
  averagePreparationTime: number;

  @OneToMany(() => ProductToBar, (productToBar) => productToBar.bar)
  productToBars: ProductToBar[];

  @OneToMany(() => Order, (order) => order.bar)
  orders: Order[];

  @ManyToOne(() => Venue, (venue) => venue.bars)
  venue: Venue;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
