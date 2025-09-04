import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    // relation with user
    @Column({ type: 'integer' })
    userId : number;
}