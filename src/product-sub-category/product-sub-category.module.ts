import { Module } from '@nestjs/common';
import { ProductSubCategoryService } from './product-sub-category.service';
import { ProductSubCategoryController } from './product-sub-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSubCategory } from './entities/product-sub-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSubCategory])],
    controllers: [ProductSubCategoryController],
  providers: [ProductSubCategoryService],
  exports: [ProductSubCategoryService],
})
export class ProductSubCategoryModule {}
