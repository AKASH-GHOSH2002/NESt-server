import { Injectable } from '@nestjs/common';
import { CreateProductSubCategoryDto } from './dto/create-product-sub-category.dto';
import { UpdateProductSubCategoryDto } from './dto/update-product-sub-category.dto';

@Injectable()
export class ProductSubCategoryService {
  create(createProductSubCategoryDto: CreateProductSubCategoryDto) {
    return 'This action adds a new productSubCategory';
  }

  findAll() {
    return `This action returns all productSubCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSubCategory`;
  }

  update(id: number, updateProductSubCategoryDto: UpdateProductSubCategoryDto) {
    return `This action updates a #${id} productSubCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSubCategory`;
  }
}
