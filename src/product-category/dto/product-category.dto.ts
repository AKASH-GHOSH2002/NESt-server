import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class ProductCategoryDto {
  @IsOptional()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}