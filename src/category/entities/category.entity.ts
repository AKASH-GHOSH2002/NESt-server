import { Account } from 'src/account/entities/account.entity';
import { BannerCategory } from 'src/banner-category/entities/banner-category.entity';
import { Banner } from 'src/banner/entities/banner.entity';

import { CategoryType, DefaultStatus } from 'src/enum';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
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
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  imageName: string;

  @Column({ type: 'enum', enum: DefaultStatus, default: DefaultStatus.PENDING })
  status: DefaultStatus;

  @Column({ type: 'enum', enum: CategoryType, default: CategoryType.NEW })
  type: CategoryType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Account, (account) => account.category, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  account: Account[];

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  subCategory: SubCategory[];


  @OneToMany(() => BannerCategory, (bannerCategory) => bannerCategory.category)
  bannerCategory: BannerCategory[];
  
  @OneToMany(() => ProductCategory,(productCategory) => productCategory.category,)
  productCategory: ProductCategory[];
}
