import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'integer'
    })
    id:number;

    @Column({
        name: 'username',
        type:'varchar',
        length: '50',
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        name: 'phonenumber',
        type: 'varchar',
        length: '10',
        nullable:false,
        unique:true
    })
    phonenumber: number;

    @Column({
        name: 'password',
        type: 'varchar',
        length: '100',
        nullable: false
    })
    password: string;
}
