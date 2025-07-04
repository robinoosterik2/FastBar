import { Injectable } from '@nestjs/common';
import { _CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { _UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';

@Injectable()
export class InventoryTransactionService {
  create(_createInventoryTransactionDto: _CreateInventoryTransactionDto) {
    return 'This action adds a new inventoryTransaction';
  }

  findAll() {
    return `This action returns all inventoryTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryTransaction`;
  }

  update(
    id: number,
    _updateInventoryTransactionDto: _UpdateInventoryTransactionDto,
  ) {
    return `This action updates a #${id} inventoryTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryTransaction`;
  }
}
