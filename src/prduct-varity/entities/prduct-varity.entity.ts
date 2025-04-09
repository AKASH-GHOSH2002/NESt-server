

import { Product } from 'src/products/entities/product.entity';
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
export class PrductVarity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  variationName: string;

  @Column({ type: 'text', nullable: true })
  vSize: string;

  @Column({ type: 'text', nullable: true })
  quantity: string;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({ type: 'float', default: 0 })
  discountedPrice: number;

  @Column({ type: 'float', default: 0 })
  discount: number;

  @Column({ nullable: true })
  mfg: Date;
  
  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'int', default: 0 })
  life: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  sku: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  barcode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid', nullable: true })
  productId: string;

  @ManyToOne(() => Product, (product) => product.productVariant, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  product: Product[];

  // @OneToMany(
  //   () => CartProductVariant,
  //   (cartProductVariant) => cartProductVariant.productVariant,
  // )
  // cartProductVariant: CartProductVariant[];
}