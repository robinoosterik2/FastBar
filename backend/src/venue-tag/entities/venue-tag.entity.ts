import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Venue } from 'src/venue/entities/venue.entity';

@Entity()
export class VenueTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, default: false })
  public: boolean;

  @Column({ nullable: false, default: true })
  isActive: boolean;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'now()', type: 'timestamp' })
  updatedAt: Date;

  @ManyToMany(() => Venue, (venue) => venue.venueTags)
  venues: Venue[];
}
