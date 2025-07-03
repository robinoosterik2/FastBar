import { Injectable } from '@nestjs/common';
import { _CreatePaymentDto } from './dto/create-payment.dto';
import { _UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  create(_createPaymentDto: _CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, _updatePaymentDto: _UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
