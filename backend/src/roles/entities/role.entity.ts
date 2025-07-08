import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import type { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at' })
  deletedAt: Date;

  @ManyToMany('User', (user: User) => user.roles)
  users: User[];
}
