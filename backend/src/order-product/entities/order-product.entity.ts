import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import type { Order } from 'src/order/entities/order.entity';
import type { Product } from 'src/product/entities/product.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', { default: 1 })
  quantity: number;

  // Unit price at time of order (important for price history)
  @Column('decimal', { precision: 10, scale: 2 })
  unitPrice: number;

  // Line total (quantity * unit price)
  @Column('decimal', { precision: 10, scale: 2 })
  lineTotal: number;

  @ManyToOne('Order', (order: Order) => order.orderProducts)
  order: Order;

  @ManyToOne('Product', (product: Product) => product.orderProducts)
  product: Product;
}
