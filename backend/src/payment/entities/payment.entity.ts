import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Order } from 'src/order/entities/order.entity';
import type { User } from 'src/users/entities/user.entity';

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum PaymentMethod {
  CASH = 'cash',
  STRIPE = 'stripe',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ nullable: false })
  currency: string;

  @Column({ type: 'enum', enum: PaymentMethod, default: PaymentMethod.CASH })
  method: PaymentMethod;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus;

  @Column({ nullable: false })
  transactionId: string;

  @Column({ nullable: false })
  providerId: string;

  @Column({ type: 'json', nullable: true })
  metadata: JSON;

  @Column({ nullable: true })
  processedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne('Order', (order: Order) => order.payment, { nullable: true })
  @JoinColumn()
  order: Order;

  @ManyToOne('User', (user: User) => user.payments, { nullable: true })
  user: User;
}
