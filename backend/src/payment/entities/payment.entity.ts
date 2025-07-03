import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: false })
  currency: string;

  @Column({ nullable: false })
  method: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  transactionId: string;

  @Column({ nullable: false })
  providerId: string;

  @Column({ nullable: true })
  metadata: string;

  @Column({ nullable: true })
  processedAt: Date;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;

  @OneToOne(() => Order, (order) => order.payment)
  order: Order;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;
}
