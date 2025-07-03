import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Bar } from 'src/bar/entities/bar.entity';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { User } from 'src/users/entities/user.entity';
import { Payment } from 'src/payment/entities/payment.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  paymentStatus: string;

  @Column({ nullable: true })
  estimatedReadyTime: Date;

  @Column({ nullable: true })
  completedAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  updatedAt: Date;

  @Column({ nullable: true, default: () => 'now()', type: 'timestamp' })
  deletedAt: Date;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Bar, (bar) => bar.orders)
  bar: Bar;

  @OneToOne(() => Payment, (payment) => payment.order)
  payment: Payment;
}
