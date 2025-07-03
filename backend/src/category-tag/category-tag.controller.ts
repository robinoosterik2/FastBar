import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryTagService } from './category-tag.service';
import { _CreateCategoryTagDto } from './dto/create-category-tag.dto';
import { _UpdateCategoryTagDto } from './dto/update-category-tag.dto';

@Controller('category-tag')
export class CategoryTagController {
  constructor(private readonly categoryTagService: CategoryTagService) {}

  @Post()
  create(@Body() createCategoryTagDto: _CreateCategoryTagDto) {
    return this.categoryTagService.create(createCategoryTagDto);
  }

  @Get()
  findAll() {
    return this.categoryTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryTagService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryTagDto: _UpdateCategoryTagDto,
  ) {
    return this.categoryTagService.update(+id, updateCategoryTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryTagService.remove(+id);
  }
}
