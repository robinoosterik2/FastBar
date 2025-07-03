import { Test, TestingModule } from '@nestjs/testing';
import { VenueTagService } from './venue-tag.service';

describe('VenueTagService', () => {
  let service: VenueTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenueTagService],
    }).compile();

    service = module.get<VenueTagService>(VenueTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
