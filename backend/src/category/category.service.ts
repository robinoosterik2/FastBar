import { Injectable } from '@nestjs/common';
import { _CreateCategoryDto } from './dto/create-category.dto';
import { _UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  create(_createCategoryDto: _CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, _updateCategoryDto: _UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
