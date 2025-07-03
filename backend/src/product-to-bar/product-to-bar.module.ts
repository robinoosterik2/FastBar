import { Module } from '@nestjs/common';
import { ProductToBarService } from './product-to-bar.service';
import { ProductToBarController } from './product-to-bar.controller';

@Module({
  controllers: [ProductToBarController],
  providers: [ProductToBarService],
})
export class ProductToBarModule {}
