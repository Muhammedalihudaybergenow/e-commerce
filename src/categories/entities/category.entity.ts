import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity({
    name: 'categories'
})
export class CategoryEntity {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
    })
    name: string;

    @Column({
        name: 'icon',
        type: 'varchar',
        nullable: false
    })
    icon: string

    @Column({
        name: 'parent_id',
        type: 'integer',
        nullable: true
    })
    parentId: number;
    
    @ManyToOne(()=>CategoryEntity,(category)=>category.id)
    @JoinColumn({
        name: 'parent_id',
        referencedColumnName: 'id'
    })
    parent: CategoryEntity;

    @OneToMany(()=>CategoryEntity,(category)=>category.parent)
    children: CategoryEntity[]


    constructor(category?:Partial<CategoryEntity>){
        Object.assign(this,category)
    }
}
