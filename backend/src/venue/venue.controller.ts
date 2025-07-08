import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { _CreateVenueDto } from './dto/create-venue.dto';
import { _UpdateVenueDto } from './dto/update-venue.dto';
import { Public } from 'src/auth/auth.guard';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  create(@Body() createVenueDto: _CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: _UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
