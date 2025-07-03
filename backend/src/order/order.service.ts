import { Injectable } from '@nestjs/common';
import { _CreateOrderDto } from './dto/create-order.dto';
import { _UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  create(_createOrderDto: _CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, _updateOrderDto: _UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
