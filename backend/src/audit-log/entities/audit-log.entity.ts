import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum AuditLogAction {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  entityType: string;

  @Column({ nullable: false })
  entityId: string;

  @Column({ type: 'enum', enum: AuditLogAction, nullable: false })
  action: AuditLogAction;

  @Column({ type: 'json', nullable: true })
  oldValues: JSON;

  @Column({ type: 'json', nullable: true })
  newValues: JSON;

  @ManyToOne(() => User, (user) => user.auditLogs)
  performedBy: User;

  @Column({ nullable: true })
  ipAddress: string;

  @Column({ nullable: true })
  userAgent: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
