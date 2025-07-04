import { PartialType } from '@nestjs/swagger';
import { _CreateInventoryTransactionDto } from './create-inventory-transaction.dto';

export class _UpdateInventoryTransactionDto extends PartialType(
  _CreateInventoryTransactionDto,
) {}
