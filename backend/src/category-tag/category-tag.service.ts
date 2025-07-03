import { Injectable } from '@nestjs/common';
import { _CreateCategoryTagDto } from './dto/create-category-tag.dto';
import { _UpdateCategoryTagDto } from './dto/update-category-tag.dto';

@Injectable()
export class CategoryTagService {
  create(_createCategoryTagDto: _CreateCategoryTagDto) {
    return 'This action adds a new categoryTag';
  }

  findAll() {
    return `This action returns all categoryTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryTag`;
  }

  update(id: number, _updateCategoryTagDto: _UpdateCategoryTagDto) {
    return `This action updates a #${id} categoryTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryTag`;
  }
}
