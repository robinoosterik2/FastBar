import { Module } from '@nestjs/common';
import { ProductToBarService } from './product-to-bar.service';
import { ProductToBarController } from './product-to-bar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductToBar } from './entities/productToBar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductToBar])],
  controllers: [ProductToBarController],
  providers: [ProductToBarService],
})
export class ProductToBarModule {}
