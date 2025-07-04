import { Injectable } from '@nestjs/common';
import { _CreateAddressDto } from './dto/create-address.dto';
import { _UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  create(_createAddressDto: _CreateAddressDto) {
    return 'This action adds a new address';
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, _updateAddressDto: _UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
