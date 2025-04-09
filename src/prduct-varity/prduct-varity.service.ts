import { Injectable } from '@nestjs/common';
import { CreatePrductVarityDto } from './dto/create-prduct-varity.dto';
import { UpdatePrductVarityDto } from './dto/update-prduct-varity.dto';

@Injectable()
export class PrductVarityService {
  
  async create(dto: ProductVariantDto[]) {
    return this.repo.save(dto);
  }

}
