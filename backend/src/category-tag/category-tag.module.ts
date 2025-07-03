import { Module } from '@nestjs/common';
import { CategoryTagService } from './category-tag.service';
import { CategoryTagController } from './category-tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTag } from './entities/category-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTag])],
  controllers: [CategoryTagController],
  providers: [CategoryTagService],
})
export class CategoryTagModule {}
