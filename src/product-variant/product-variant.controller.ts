import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariantDto } from './dto/product-variant.dto';

@Controller('product-variant')
export class ProductVariantController {
  constructor(private readonly productVariantService: ProductVariantService) {}

 
}
