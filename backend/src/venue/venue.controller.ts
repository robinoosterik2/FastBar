import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { _CreateVenueDto } from './dto/create-venue.dto';
import { _UpdateVenueDto } from './dto/update-venue.dto';
import { Public } from 'src/auth/auth.guard';
import { GetVenueQueryDto } from './dto/get-venue-query.dto';
import { GetVenuesResponseDto } from './dto/venue-response.dto';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  create(@Body() createVenueDto: _CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @Public()
  @Get()
  async findAll(
    @Query() query: GetVenueQueryDto,
  ): Promise<GetVenuesResponseDto> {
    return this.venueService.findAll(query);
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
