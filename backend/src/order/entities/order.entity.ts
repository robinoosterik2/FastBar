import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import type { Bar } from 'src/bar/entities/bar.entity';
import type { OrderProduct } from 'src/order-product/entities/order-product.entity';
import type { User } from 'src/users/entities/user.entity';
import type { Payment } from 'src/payment/entities/payment.entity';
import { JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  READY = 'ready',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity()
export class Order extends BaseEntity {
  @Column({ nullable: false })
  orderNumber: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  subtotal: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  taxAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  tipAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  discountAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ nullable: true })
  estimatedReadyTime: Date;

  @Column({ nullable: true })
  completedAt: Date;

  @OneToMany('OrderProduct', (orderProduct: OrderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];

  @ManyToOne('User', (user: User) => user.orders, { nullable: true })
  user: User;

  @ManyToOne('Bar', (bar: Bar) => bar.orders)
  bar: Bar;

  @OneToOne('Payment', (payment: Payment) => payment.order, { cascade: true })
  @JoinColumn()
  payment: Payment;
}
