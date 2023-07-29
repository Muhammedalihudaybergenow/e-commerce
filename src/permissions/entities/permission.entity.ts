import { RoleEntity } from "src/roles/entities/role.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'permissions'
})
export class PermissionEntity {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'integer'
    })
    id:number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false
    })
    name: string;

    @ManyToMany(()=>RoleEntity,(roles)=>roles.permissions)
    @JoinTable({
        name: 'roles_permissions',
        joinColumn:{
            name: 'permission_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id'
        }
    })
    roles: RoleEntity[];

    @ManyToMany(()=>UserEntity,(users)=>users.permissions)
    @JoinTable({
        name: 'users_permissions',
        joinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    })
    users: UserEntity[];
    constructor(permission?:Partial<PermissionEntity>){
        Object.assign(this,permission)
    }
}
