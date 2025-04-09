import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  async Productcreate(dto: ProductDto, accountId: string) {
    const product = await this.productsRepo.findOne({
      where: {
        accountId: accountId,
        title: dto.title,
        Desc: dto.Desc,
      },
    });
    if (product) {
      throw new ConflictException('Product already exists for this account');
    }
    const newproduct = Object.assign(dto);
    return this.productsRepo.save(newproduct);
  }
}
