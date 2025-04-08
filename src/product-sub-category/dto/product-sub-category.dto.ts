import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class ProductSubCategoryDto {
  @IsOptional()
  id: string;

  @IsOptional()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  subCategoryId: string;
}