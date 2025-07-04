import { Column, Entity, ManyToMany } from 'typeorm';
import type { Venue } from 'src/venue/entities/venue.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity()
export class VenueTag extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, default: false })
  public: boolean;

  @Column({ nullable: false, default: true })
  isActive: boolean;

  @ManyToMany('Venue', (venue: Venue) => venue.venueTags)
  venues: Venue[];
}
