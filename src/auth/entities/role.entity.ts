import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @ManyToMany(() => User, (user) => user.roles)
    users: User[];
}