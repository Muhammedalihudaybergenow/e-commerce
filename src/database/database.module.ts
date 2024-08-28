import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from 'src/brands/entities/brand.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({   
    imports:[
    TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService)=>{
            return {
                type: 'postgres',
                database: configService.get<string>('TYPEORM_DATABASE_NAME'),
                host: configService.get<string>('TYPEORM_DATABASE_HOST'),
                port: parseInt(configService.get<string>('TYPEORM_DATABASE_PORT')),
                entities: [UserEntity,ProductEntity,RoleEntity,BrandEntity,CategoryEntity,PermissionEntity],
                username: configService.get<string>('TYPEORM_DATABASE_USERNAME'),
                password: configService.get<string>('TYPEORM_DATABASE_PASSWORD')
            }
        }
    })]
})
export class DatabaseModule {}
