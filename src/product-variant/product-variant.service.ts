import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { Repository } from 'typeorm';
import { ProductVariantDto } from './dto/product-variant.dto';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariant)
    private readonly repo: Repository<ProductVariant>,
  ) {}

  async create(dto: ProductVariantDto[]) {
    return this.repo.save(dto);
  }
}
