import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Settings } from './settings.entity';
import { Role } from 'src/roles/entities/role.entity';

export enum Status {
  ACTIVE = 'active',
  BANNED = 'banned',
  INACTIVE = 'inactive',
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

  @OneToOne(() => Settings, { cascade: true })
  @JoinColumn()
  settings: Settings;

  @OneToMany(() => Role, (role) => role.user)
  roles: Role[];
}
