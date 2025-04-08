import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';


@Controller('product-category')
export class ProductCategoryController {
  constructor(private readonly productCategoryService: ProductCategoryService) {}

  
}
