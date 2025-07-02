import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
