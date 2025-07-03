import { Module } from '@nestjs/common';
import { VenueTagService } from './venue-tag.service';
import { VenueTagController } from './venue-tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenueTag } from './entities/venue-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VenueTag])],
  controllers: [VenueTagController],
  providers: [VenueTagService],
})
export class VenueTagModule {}
