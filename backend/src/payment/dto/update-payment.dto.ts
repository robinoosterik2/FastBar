import { PartialType } from '@nestjs/swagger';
import { _CreatePaymentDto } from './create-payment.dto';

export class _UpdatePaymentDto extends PartialType(_CreatePaymentDto) {}
