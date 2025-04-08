import { Module } from '@nestjs/common';
import { PrductVarityService } from './prduct-varity.service';
import { PrductVarityController } from './prduct-varity.controller';

@Module({
  controllers: [PrductVarityController],
  providers: [PrductVarityService],
})
export class PrductVarityModule {}
