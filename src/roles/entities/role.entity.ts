import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'roles'
})
export class RoleEntity {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id:number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        unique: true
    })
    name: string;

    @ManyToMany(()=>UserEntity,(users)=>users.roles)
    users: UserEntity[];
    constructor(role?: Partial<RoleEntity>){
        Object.assign(this,role);
    }
}
