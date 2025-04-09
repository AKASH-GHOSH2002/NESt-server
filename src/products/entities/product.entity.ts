import { Account } from 'src/account/entities/account.entity';
import { ProductStatus } from 'src/enum';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';
import { ProductImage } from 'src/product-images/entities/product-image.entity';
import { ProductSubCategory } from 'src/product-sub-category/entities/product-sub-category.entity';
import { ProductVariant } from 'src/product-variant/entities/product-variant.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

  @Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'text', nullable: true })
    title: string;
  
    @Column({ type: 'text', nullable: true })
    Desc: string;
   
    @Column({ type: 'text', nullable: true })
    tag: string;
  
    @Column({ type: 'text', nullable: true })
    maxQuantity: string;
  
    @Column({ type: 'text', nullable: true })
    minQuantity: string;
  
    @Column({ type: 'float', default: 0 })
    minQuantitytMrp: number;
  
    @Column({ type: 'float', default: 0 })
    maxtQuantityMrp: number;
  
    @Column({ type: 'float', default: 0 })
    discountRate: number;
  
    @Column({ type: 'text', nullable: true })
    size: string;
  
    @Column({ type: 'float', default: 0 })
    ACTUAL_WEIGHT: number;

  
    @Column({ type: 'float', default: 0 })
    LENGTH: number;
  
    @Column({ type: 'float', default: 0 })
    BREADTH: number;
  
    @Column({ type: 'float', default: 0 })
    HEIGHT: number;

    @Column({ type: 'boolean', default: false })
    returnAvailable: boolean;
  
    @Column({ type: 'boolean', default: false })
    bestSeller: boolean;
  
    @Column({ type: 'int', default: 0 })
    returnInDays: number;
  
    @Column({ type: 'boolean', default: false })
    freeShipping: boolean;
  
    @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.PENDING })
    status: ProductStatus;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column({ type: 'uuid', nullable: true })
    accountId: string;
  
    @ManyToOne(() => Account, (account) => account.product, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE',})
    account: Account[];

    @OneToMany( () => ProductCategory, (productCategory) => productCategory.product,)
    productCategory: ProductCategory[];
    
    @OneToMany( () => ProductSubCategory, (productSubCategory) => productSubCategory.product,)
    productSubCategory: ProductSubCategory[];

   @ManyToOne(() => ProductImage, (productImage) => productImage.product)
   productImage: ProductImage[];

   @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
   productVariant: ProductVariant[];

}
