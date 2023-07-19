import { DataSource, DataSourceOptions } from "typeorm";


const dataSourceOptions: DataSourceOptions = {

    type: 'postgres',
    database: 'e-commerce',
    host: 'localhost',
    port:5432,
    username: 'postgres',
    password: 'zaqwsx',
    synchronize: false,
    entities: ['dist/**/*.entity{.js,.ts}'],
    migrations: ['dist/database/migrations/**/*{.js,.ts}']
}
export default new DataSource(dataSourceOptions);