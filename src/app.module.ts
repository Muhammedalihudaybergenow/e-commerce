import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
    BrandsModule, 
    AuthenticationModule,
    MulterModule.register({
    dest: './uploads'
  }),
  ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  CategoriesModule,
  ProductsModule,
  RolesModule,
  PermissionsModule,
]
})
export class AppModule {}
