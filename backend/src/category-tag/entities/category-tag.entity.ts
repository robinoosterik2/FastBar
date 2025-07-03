import { Category } from 'src/category/entities/category.entity';
import { Venue } from 'src/venue/entities/venue.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CategoryTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => Venue, (venue) => venue.categoryTags)
  venue: Venue;

  @ManyToMany(() => Category, (category) => category.categoryTags)
  categories: Category[];

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;
}
