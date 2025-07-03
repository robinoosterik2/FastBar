import { Module } from '@nestjs/common';
import { VenueTagService } from './venue-tag.service';
import { VenueTagController } from './venue-tag.controller';

@Module({
  controllers: [VenueTagController],
  providers: [VenueTagService],
})
export class VenueTagModule {}
