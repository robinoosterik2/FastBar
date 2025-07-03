import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Settings } from './settings.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { AuditLog } from 'src/audit-log/entities/audit-log.entity';

export enum Status {
  ACTIVE = 'active',
  BANNED = 'banned',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  hashedPassword: string;

  @Column({ nullable: false })
  dateOfBirth: Date;

  @Column({ default: Status.ACTIVE, nullable: false })
  status: Status;

  @Column({ default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ default: () => 'now()', nullable: false })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column({ default: false, nullable: false })
  emailVerified: boolean;

  @Column({ default: false, nullable: false })
  phoneVerified: boolean;

  @Column({ nullable: true })
  lastLoginAt: Date;

  @OneToOne(() => Settings, { cascade: true })
  @JoinColumn()
  settings: Settings;

  @OneToMany(() => Role, (role) => role.user)
  roles: Role[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany(() => AuditLog, (auditLog) => auditLog.performedBy)
  auditLogs: AuditLog[];

  @BeforeInsert()
  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date();
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  normalize() {
    this.email = this.email.toLowerCase();
  }
}
