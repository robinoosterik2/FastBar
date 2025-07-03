import { PartialType } from '@nestjs/swagger';
import { _CreateCategoryTagDto } from './create-category-tag.dto';

export class _UpdateCategoryTagDto extends PartialType(_CreateCategoryTagDto) {}
