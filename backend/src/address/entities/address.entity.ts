import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Venue } from 'src/venue/entities/venue.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Venue, (venue) => venue.addresses)
  venue: Venue[];

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

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  isDefault: boolean;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;
}
