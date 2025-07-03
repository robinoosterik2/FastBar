import { Injectable } from '@nestjs/common';
import { _CreateBarDto } from './dto/create-bar.dto';
import { _UpdateBarDto } from './dto/update-bar.dto';

@Injectable()
export class BarService {
  create(_createBarDto: _CreateBarDto) {
    return 'This action adds a new bar';
  }

  findAll() {
    return `This action returns all bar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bar`;
  }

  update(id: number, _updateBarDto: _UpdateBarDto) {
    return `This action updates a #${id} bar`;
  }

  remove(id: number) {
    return `This action removes a #${id} bar`;
  }
}
