
import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductSubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'uuid' })
  subCategoryId: string;

  @ManyToOne(() => Product, (product) => product.productSubCategory, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  product: Product[];

  @ManyToOne( () => SubCategory, (subCategory) => subCategory.productSubCategory, {
      cascade: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  subCategory: SubCategory[];
}