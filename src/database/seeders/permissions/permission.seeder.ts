import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

const permissions =[
    {
        name: 'users.create'
    },
    {
        name: 'users.update'
    }
]
export class PermissionSeeder implements Seeder {
    async run(dataSource: DataSource,factoryManager: SeederFactoryManager){
        // const permissionRepository = dataSource.getRepository(Permisio)
    }
}