import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import type { User } from 'src/users/entities/user.entity';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'light', nullable: false })
  theme: string;

  @Column({ default: 'en', nullable: false })
  language: string;

  @Column({ default: 'UTC', nullable: false })
  timezone: string;

  @Column({ default: true, nullable: false })
  notifications_enabled: boolean;

  @Column({ default: true, nullable: false })
  email_notifications: boolean;

  @Column({ default: false, nullable: false })
  push_notifications: boolean;

  @Column({ default: false, nullable: false })
  marketing_emails: boolean;

  @Column({ default: false, nullable: false })
  order_notifications: boolean;

  @Column({ default: () => 'now()', nullable: false })
  updatedAt: Date;

  @OneToOne('User', (user: User) => user.settings)
  user: User;
}
