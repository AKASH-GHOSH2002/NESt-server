
import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'uuid' })
  categoryId: string;

  @ManyToOne(() => Product, (product) => product.productCategory, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  product: Product[];

  @ManyToOne(
    () => Category,
    (category) => category.productCategory,
    {
      cascade: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  category: Category[];
}
