import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension'
import { UserSeeder } from "../seeders/users/user.seeder";

const dataSourceOptions: DataSourceOptions & SeederOptions = {

    type: 'postgres',
    database: 'e-commerce',
    host: 'localhost',
    port:5432,
    username: 'postgres',
    password: 'zaqwsx',
    synchronize: false,
    entities: ['dist/**/*.entity{.js,.ts}'],
    seeds: [UserSeeder],
    migrations: ['dist/database/migrations/**/*{.js,.ts}']
}
export default new DataSource(dataSourceOptions);