import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension'
import { UserSeeder } from "../seeders/users/user.seeder";
import { RoleSeeder } from "../seeders/roles/role.seeder";
import { UserRoleSeeder } from "../seeders/users/user-role.seeder";
import { PermissionSeeder } from "../seeders/permissions/permission.seeder";

const dataSourceOptions: DataSourceOptions & SeederOptions = {

    type: 'postgres',
    database: 'e-commerce',
    host: 'localhost',
    port:5435,
    username: 'admin',
    password: 'zaqwsx',
    synchronize: false,
    entities: ['dist/**/*.entity{.js,.ts}'],
    seeds: [UserSeeder,RoleSeeder,UserRoleSeeder,PermissionSeeder],
    migrations: ['dist/database/migrations/**/*{.js,.ts}']
}
export default new DataSource(dataSourceOptions);