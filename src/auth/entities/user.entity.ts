import { Column, Entity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./role.entity";

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

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable({ name: 'user_roles' })
    roles: Role[];

}