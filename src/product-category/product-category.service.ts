import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategoryDto } from './dto/product-category.dto';
import { ProductCategory } from './entities/product-category.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductCategoryService {

constructor(
@InjectRepository (ProductCategory) private readonly productCategoryRepo: Repository<ProductCategory>,
){}
 async Categorycreate(dto: ProductCategoryDto) {


    const existingRecords = await this.productCategoryRepo.find({
        where: { productId: dto.productId },
      });
    
      if (existingRecords.length > 0) {
        await this.productCategoryRepo.remove(existingRecords);
      }
    
      return await this.productCategoryRepo.save(dto);
    }
    


 
}
