import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('increment')
    id: string

    @Column({ type: 'varchar', length: 50, unique: true })
    name: string

    @Column( { type: 'int', default: 0 })
    stock: number

    @Column( { type: 'varchar' })
    brand: string

    @Column( { type: 'float' })
    price: number

}
