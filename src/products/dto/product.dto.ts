import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
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
import { ProductStatus } from 'src/enum';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  Desc: string;

  @IsNotEmpty()
  tag: string;


  @IsOptional()
  maxQuantity: string;

  @IsOptional()
  minQuantity: string;

  @IsOptional()
  mrp: number;

  @IsOptional()
  discountRate: number;
  
  @IsOptional()
  size: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  ACTUAL_WEIGHT: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  VOLUMETRIC_WEIGHT: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  LENGTH: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  BREADTH: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  HEIGHT: number;


  @IsOptional()
  accountId: string;
}

export class ProductStatusDto {
  @IsNotEmpty()
  @IsEnum(ProductStatus)
  status: ProductStatus;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MinLength(0)
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(0)
  @MaxLength(500)
  Desc: string;

  @IsOptional()
  tag: string;

  @IsOptional()
  maxQuantity: string;

  @IsOptional()
  minQuantity: string;

  @IsOptional()
  mrp: number;

  @IsOptional()
  discountRate: number;
  
  @IsOptional()
  size: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  ACTUAL_WEIGHT: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  VOLUMETRIC_WEIGHT: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  LENGTH: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  BREADTH: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  HEIGHT: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  returnAvailable: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(90)
  returnInDays: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  freeShipping: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  gstBillAvailable: boolean;



  @IsOptional()
  accountId: string;
}