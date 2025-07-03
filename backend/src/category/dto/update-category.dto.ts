import { PartialType } from '@nestjs/swagger';
import { _CreateCategoryDto } from './create-category.dto';

export class _UpdateCategoryDto extends PartialType(_CreateCategoryDto) {}
