import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import type { Settings } from './settings.entity';
import type { Role } from 'src/roles/entities/role.entity';
import type { Order } from 'src/order/entities/order.entity';
import type { Payment } from 'src/payment/entities/payment.entity';
import type { AuditLog } from 'src/audit-log/entities/audit-log.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

export enum Status {
  ACTIVE = 'active',
  BANNED = 'banned',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

@Entity()
export class User extends BaseEntity {
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

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  status: Status;

  @Column({ default: false, nullable: false })
  emailVerified: boolean;

  @Column({ default: false, nullable: false })
  phoneVerified: boolean;

  @Column({ nullable: true })
  lastLoginAt: Date;

  @OneToOne('Settings', (settings: Settings) => settings.user, {
    cascade: true,
  })
  @JoinColumn()
  settings: Settings;

  @ManyToMany('Role', (role: Role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToMany('Order', (order: Order) => order.user)
  orders: Order[];

  @OneToMany('Payment', (payment: Payment) => payment.user)
  payments: Payment[];

  @OneToMany('AuditLog', (auditLog: AuditLog) => auditLog.performedBy)
  auditLogs: AuditLog[];

  @BeforeInsert()
  @BeforeUpdate()
  normalize() {
    this.email = this.email.toLowerCase();
  }
}
