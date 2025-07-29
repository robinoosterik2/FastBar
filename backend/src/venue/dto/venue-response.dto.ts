import { VenueTag } from 'src/venue-tag/entities/venue-tag.entity';
import { Category } from 'src/category/entities/category.entity';
import { Expose, Exclude } from 'class-transformer';
import { Bar } from 'src/bar/entities/bar.entity';
import { User } from 'src/users/entities/user.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import { Type } from 'class-transformer';

export class VenueResponseDto {
  @Exclude()
  id: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  deletedAt: Date;

  @Exclude()
  bars: Bar[];

  @Exclude()
  categoryTags: CategoryTag[];

  @Exclude()
  categories: Category[];

  @Exclude()
  owner: User[];

  @Exclude()
  isActive: boolean;

  @Exclude()
  isOpen: boolean;

  @Exclude()
  isPublic: boolean;

  @Exclude()
  isSearchable: boolean;

  @Exclude()
  openingHours: string;

  @Expose()
  name: string;

  @Expose()
  phone: string;

  @Expose()
  email: string;

  @Expose()
  website: string;

  @Expose()
  description: string;

  @Expose()
  logo: string;

  @Expose()
  venueTags?: VenueTag[];
}

export class GetVenuesResponseDto {
  @Expose()
  @Type(() => VenueResponseDto)
  venues: VenueResponseDto[];

  @Expose()
  total: number;

  @Expose()
  page: number;

  @Expose()
  limit: number;

  @Expose()
  totalPages: number;
}
