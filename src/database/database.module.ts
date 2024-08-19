import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from 'src/brands/entities/brand.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({   
    imports:[
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5435,
        username: 'admin',
        password: 'zaqwsx',
        database:'e-commerce',
        entities: [UserEntity,BrandEntity,CategoryEntity,ProductEntity,RoleEntity,PermissionEntity],
        synchronize:false,
        // cache: {
        //     type: 'redis',
        //     duration: 10000,
        //     alwaysEnabled: true,
        // }
    })]
})
export class DatabaseModule {}
