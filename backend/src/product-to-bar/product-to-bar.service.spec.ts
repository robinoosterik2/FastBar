import { Test, TestingModule } from '@nestjs/testing';
import { ProductToBarService } from './product-to-bar.service';

describe('ProductToBarService', () => {
  let service: ProductToBarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductToBarService],
    }).compile();

    service = module.get<ProductToBarService>(ProductToBarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
