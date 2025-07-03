import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { default: 1 })
  quantity: number;

  // Unit price at time of order (important for price history)
  @Column('decimal', { precision: 10, scale: 2 })
  unitPrice: number;

  // Line total (quantity * unit price)
  @Column('decimal', { precision: 10, scale: 2 })
  lineTotal: number;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
