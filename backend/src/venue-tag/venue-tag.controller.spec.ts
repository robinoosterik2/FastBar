import { Test, TestingModule } from '@nestjs/testing';
import { VenueTagController } from './venue-tag.controller';
import { VenueTagService } from './venue-tag.service';

describe('VenueTagController', () => {
  let controller: VenueTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueTagController],
      providers: [VenueTagService],
    }).compile();

    controller = module.get<VenueTagController>(VenueTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
