import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Bar } from 'src/bar/entities/bar.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  taxAmount: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  tipAmount: number;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];

  @ManyToOne(() => Bar, (bar) => bar.orders)
  bar: Bar;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  updatedAt: Date;
}
