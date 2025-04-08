import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactUs {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    name: string;
    
    @Column({ type: 'varchar', length: 100, nullable: true })
    email: string;
    
    @Column({type: 'text', nullable: true})
    subject: string;

    @Column({type: 'text', nullable: true})
    message: string;

    @CreateDateColumn()
    createdAt: Date;
}
