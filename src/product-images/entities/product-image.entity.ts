import { Account } from "src/account/entities/account.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class ProductImage {


 @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  file: string;

  @Column({ type: 'text', nullable: true })
  fileName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid', nullable: true })
  productId: string;

  @Column({ type: 'uuid', nullable: true })
  accountId: string;

  @ManyToOne(() => Product, (product) => product.productImage, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  product: Product[];
  
  @ManyToOne(() => Account, (account) => account.productImage, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  account: Account[];
}
