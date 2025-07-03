import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  entityType: string;

  @Column({ nullable: false })
  entityId: string;

  @Column({ nullable: false })
  action: string;

  @Column({ nullable: true })
  oldValues: string;

  @Column({ nullable: true })
  newValues: string;

  @ManyToOne(() => User, (user) => user.auditLogs)
  performedBy: User;

  @Column({ nullable: true })
  ipAddress: string;

  @Column({ nullable: true })
  userAgent: string;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;
}
