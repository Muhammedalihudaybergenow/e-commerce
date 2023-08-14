import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItemEntity } from "../order-items/entities/order-item.entity";

@Entity({
    name: 'orders'
})
export class OrderEntity {

    @PrimaryGeneratedColumn({
        name: 'id',
        type:'integer'

    })
    id:number;

    @Column({
        name: 'address',
        type: 'varchar',
        nullable: false
    })
    address: string;

    @Column({
        name: 'phonenumber',
        type: 'varchar',
        nullable: false
    })
    phonenumber: string;

    @Column({
        name: 'user_id',
        type: 'integer',
        nullable: false
    })
    userId: number;

    @Column({
        name: 'status',
        type: 'varchar',
        nullable: false
    })
    status: string;

    @Column({
        name: 'order_no',
        type: 'varchar',
        nullable: false
    })
    orderNo: string;

    @Column({
        name: 'created_at',
        type: 'bigint',
        nullable: false
    })
    createdAt: number;

    @Column({
        name: 'updated_at',
        type: 'bigint',
        nullable: false
    })
    updatedAt:number;

    @OneToMany(()=>OrderItemEntity,(orderItem)=>orderItem.order)
    orderItems: OrderItemEntity[];
}
