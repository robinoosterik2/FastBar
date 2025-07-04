import { Injectable } from '@nestjs/common';
import { _CreateProductDto } from './dto/create-product.dto';
import { _UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  create(_createProductDto: _CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, _updateProductDto: _UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
