import { PartialType } from '@nestjs/swagger';
import { _CreateProductDto } from './create-product.dto';

export class _UpdateProductDto extends PartialType(_CreateProductDto) {}
