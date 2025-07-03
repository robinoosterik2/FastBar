import { PartialType } from '@nestjs/swagger';
import { _CreateOrderDto } from './create-order.dto';

export class _UpdateOrderDto extends PartialType(_CreateOrderDto) {}
