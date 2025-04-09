import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class ProductVariantDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  variationName: string;

  @IsOptional()
  vSize: string;

  @IsOptional()
  quantity: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;  

  @IsOptional()
  discountedPrice: number;

  @IsOptional()
  discount: number;
  
  @IsOptional()
  @IsString()
  @MinLength(0)
  @MaxLength(100)
  sku: string;

  @IsOptional()
  @IsString()
  @MinLength(0)
  @MaxLength(100)
  barcode: string;

  @IsOptional()
  productId: string;
}