import { Entity, Column, PrimaryGeneratedColumn, DatabaseType } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({type: "text"})
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
}