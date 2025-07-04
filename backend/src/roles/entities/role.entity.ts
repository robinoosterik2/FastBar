import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import type { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;

  @ManyToMany('User', (user: User) => user.roles)
  users: User[];
}
