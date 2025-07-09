import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import type { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import type { Category } from 'src/category/entities/category.entity';
import type { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  ageRestriction: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false, default: true })
  isActive: boolean;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  alcoholContent: number;

  @OneToMany(
    'ProductToBar',
    (productToBar: ProductToBar) => productToBar.product,
  )
  productToBars: ProductToBar[];

  @ManyToMany('Category', (category: Category) => category.products)
  category: Category[];

  @OneToMany(
    'OrderProduct',
    (orderProduct: OrderProduct) => orderProduct.product,
  )
  orderProducts: OrderProduct[];
}
