import { Bar } from 'src/bar/entities/bar.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class ProductToBar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.productToBars)
  product: Product;

  @ManyToOne(() => Bar, (bar) => bar.productToBars)
  bar: Bar;

  @Column()
  stock: number;
}
