import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/enum';
import { ProductDto } from './dto/product.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Account } from 'src/account/entities/account.entity';
import { ProductCategoryService } from 'src/product-category/product-category.service';
import { ProductSubCategoryService } from 'src/product-sub-category/product-sub-category.service';
import { Product } from 'src/products/entities/product.entity';
import { ProductPaginationDto } from './dto/product-pagination.dto';
import { ProductVariantService } from 'src/product-variant/product-variant.service';
import { Category } from 'src/category/entities/category.entity';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
    private readonly productCategoryService: ProductCategoryService,
    private readonly productSubCategoryService:ProductSubCategoryService,
    private readonly productVariantService: ProductVariantService,
    
  ) {}
  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, )
  async create(@Body() dto: ProductDto, @CurrentUser() user: Account) {
    dto.accountId = user.id;
    const payload = await this.productsService.Productcreate(dto, user.id);
    if (dto.productVariant && dto.productVariant.length > 0) {
      dto.productVariant.forEach((item) => {
        item.productId = payload.id;
        item.discount = ((item.price - item.discountedPrice) / item.price) * 100
      });
      this.productVariantService.create(dto.productVariant);
    }

    if (dto.category && Category.length > 0) {

      dto.category.forEach((item) => {
        item.productId = payload.id;
      
    });
      this. productCategoryService.Categorycreate(dto.category);
    }
    if (dto.subCategory) {
      dto.subCategory.productId = payload.id;
      this.productSubCategoryService.SubCategorycreate(dto.subCategory);
    }
    
    return payload;
  }


  // @Get('admin/all')
  // @UseGuards(AuthGuard('jwt'), RolesGuard, )
  // @Roles(UserRole.ADMIN)
  // findAllByAdmin(@Query() dto: ProductPaginationDto) {
  //   return this.productsService.findAll(dto);
  // }


}
