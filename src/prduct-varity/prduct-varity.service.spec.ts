import { Test, TestingModule } from '@nestjs/testing';
import { PrductVarityService } from './prduct-varity.service';

describe('PrductVarityService', () => {
  let service: PrductVarityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrductVarityService],
    }).compile();

    service = module.get<PrductVarityService>(PrductVarityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
