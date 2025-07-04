import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import type { User } from 'src/users/entities/user.entity';

export enum InventoryTransactionType {
  RESTOCK = 'restock',
  SALE = 'sale',
  ADJUSTMENT = 'adjustment',
  WASTE = 'waste',
}

@Entity()
export class InventoryTransaction {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne('ProductToBar')
  @JoinColumn()
  productToBar: ProductToBar;

  @Column({ type: 'enum', enum: InventoryTransactionType, nullable: false })
  type: InventoryTransactionType;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  previousStock: number;

  @Column({ nullable: false })
  newStock: number;

  @Column({ nullable: true })
  reason: string;

  @OneToOne('User')
  @JoinColumn()
  performedBy: User;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
