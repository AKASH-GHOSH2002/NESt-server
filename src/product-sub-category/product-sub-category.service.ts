import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductSubCategory } from './entities/product-sub-category.entity';
import { Repository } from 'typeorm';
import { ProductSubCategoryDto } from './dto/product-sub-category.dto';
@Injectable()
export class ProductSubCategoryService {

    constructor(@InjectRepository(ProductSubCategory) private readonly productSubCategoryRepo: Repository<ProductSubCategory>,){}
    
    async SubCategorycreate(dto: ProductSubCategoryDto) {
        const existingRecords = await this.productSubCategoryRepo.find({
          where: { productId: dto.productId },
        });
      
        if (existingRecords.length > 0) {
          await this.productSubCategoryRepo.remove(existingRecords);
        }
      
        return await this.productSubCategoryRepo.save(dto);
      }

}

