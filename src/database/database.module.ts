import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from 'src/brands/entities/brand.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({   
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'zaqwsx',
        database:'e-commerce',
        entities: [UserEntity,BrandEntity],
        synchronize:true
    })]
})
export class DatabaseModule {}
