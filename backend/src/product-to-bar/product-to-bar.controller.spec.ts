import { Test, TestingModule } from '@nestjs/testing';
import { ProductToBarController } from './product-to-bar.controller';
import { ProductToBarService } from './product-to-bar.service';

describe('ProductToBarController', () => {
  let controller: ProductToBarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductToBarController],
      providers: [ProductToBarService],
    }).compile();

    controller = module.get<ProductToBarController>(ProductToBarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
