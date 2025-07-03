import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueTagService } from './venue-tag.service';
import { CreateVenueTagDto } from './dto/create-venue-tag.dto';
import { UpdateVenueTagDto } from './dto/update-venue-tag.dto';

@Controller('venue-tag')
export class VenueTagController {
  constructor(private readonly venueTagService: VenueTagService) {}

  @Post()
  create(@Body() createVenueTagDto: CreateVenueTagDto) {
    return this.venueTagService.create(createVenueTagDto);
  }

  @Get()
  findAll() {
    return this.venueTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTagService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenueTagDto: UpdateVenueTagDto,
  ) {
    return this.venueTagService.update(+id, updateVenueTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTagService.remove(+id);
  }
}
