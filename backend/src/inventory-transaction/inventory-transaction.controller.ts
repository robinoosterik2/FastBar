import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryTransactionService } from './inventory-transaction.service';
import { _CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { _UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';

@Controller('inventory-transaction')
export class InventoryTransactionController {
  constructor(
    private readonly inventoryTransactionService: InventoryTransactionService,
  ) {}

  @Post()
  create(
    @Body() createInventoryTransactionDto: _CreateInventoryTransactionDto,
  ) {
    return this.inventoryTransactionService.create(
      createInventoryTransactionDto,
    );
  }

  @Get()
  findAll() {
    return this.inventoryTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryTransactionDto: _UpdateInventoryTransactionDto,
  ) {
    return this.inventoryTransactionService.update(
      +id,
      updateInventoryTransactionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryTransactionService.remove(+id);
  }
}
