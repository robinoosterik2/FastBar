import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Venue } from 'src/venue/entities/venue.entity';

export enum AddressType {
  home = 'home',
  work = 'work',
  billing = 'billing',
  shipping = 'shipping',
  venue = 'venue',
}

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne('Venue', (venue: Venue) => venue.addresses)
  venue: Venue;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  province: string;

  @Column({ nullable: false })
  postalCode: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  latitude: number;

  @Column({ nullable: false })
  longitude: number;

  @Column({
    nullable: false,
    enum: AddressType,
    default: AddressType.venue,
  })
  type: AddressType;

  @Column({ nullable: false })
  isDefault: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
