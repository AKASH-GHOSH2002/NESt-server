import { Test, TestingModule } from '@nestjs/testing';
import { PrductVarityController } from './prduct-varity.controller';
import { PrductVarityService } from './prduct-varity.service';

describe('PrductVarityController', () => {
  let controller: PrductVarityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrductVarityController],
      providers: [PrductVarityService],
    }).compile();

    controller = module.get<PrductVarityController>(PrductVarityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
