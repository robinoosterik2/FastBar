import type { Category } from 'src/category/entities/category.entity';
import type { Venue } from 'src/venue/entities/venue.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CategoryTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne('Venue', (venue: Venue) => venue.categoryTags)
  venue: Venue;

  @ManyToMany('Category', (category: Category) => category.categoryTags)
  categories: Category[];

  @Column({ nullable: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
