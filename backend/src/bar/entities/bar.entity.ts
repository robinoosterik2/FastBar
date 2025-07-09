import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import type { Venue } from 'src/venue/entities/venue.entity';
import type { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import type { Order } from 'src/order/entities/order.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class Bar extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ type: 'json', nullable: true })
  operatingHours: string;

  @Column({ nullable: true })
  averagePreparationTime: number;

  @OneToMany('ProductToBar', (productToBar: ProductToBar) => productToBar.bar)
  productToBars: ProductToBar[];

  @OneToMany('Order', (order: Order) => order.bar)
  orders: Order[];

  @ManyToOne('Venue', (venue: Venue) => venue.bars)
  venue: Venue;
}
