import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductController } from './order-product.controller';
import { OrderProductService } from './order-product.service';

describe('OrderProductController', () => {
  let controller: OrderProductController;
  let service: OrderProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderProductController],
      providers: [OrderProductService],
    }).compile();

    controller = module.get<OrderProductController>(OrderProductController);
    service = module.get<OrderProductService>(OrderProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
