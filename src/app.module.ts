import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [DatabaseModule, UsersModule, BrandsModule, AuthenticationModule]
})
export class AppModule {}
