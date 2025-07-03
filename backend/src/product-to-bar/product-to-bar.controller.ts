import { Controller } from '@nestjs/common';
import { ProductToBarService } from './product-to-bar.service';

@Controller('product-to-bar')
export class ProductToBarController {
  constructor(private readonly productToBarService: ProductToBarService) {}
}
