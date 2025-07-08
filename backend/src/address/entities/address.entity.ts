import { Column, Entity, ManyToOne } from 'typeorm';
import type { Venue } from 'src/venue/entities/venue.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

export enum AddressType {
  home = 'home',
  work = 'work',
  billing = 'billing',
  shipping = 'shipping',
  venue = 'venue',
}

@Entity()
export class Address extends BaseEntity {
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
    type: 'enum',
    enum: AddressType,
    default: AddressType.venue,
    nullable: false,
  })
  type: AddressType;

  @Column({ nullable: false })
  isDefault: boolean;
}
