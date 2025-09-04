import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column({ type: 'varchar', length: 50 })
    fullName: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column( { type: 'boolean'})
    isActive: boolean;

}