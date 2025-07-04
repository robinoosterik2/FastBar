import type { Bar } from 'src/bar/entities/bar.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Product } from 'src/product/entities/product.entity';

@Entity()
export class ProductToBar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne('Product', (product: Product) => product.productToBars)
  product: Product;

  @ManyToOne('Bar', (bar: Bar) => bar.productToBars)
  bar: Bar;

  @Column({ nullable: true })
  currentStock: number;

  @Column({ nullable: true })
  minimumStock: number;

  @Column({ nullable: true })
  maximumStock: number;

  @Column()
  isAvailable: boolean;

  @Column({ nullable: true })
  lastRestocked: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
