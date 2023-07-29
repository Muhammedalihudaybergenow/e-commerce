import { PermissionEntity } from "src/permissions/entities/permission.entity";
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
        const permissionRepository = dataSource.createEntityManager().getRepository(PermissionEntity);
        const names = permissions.map(permission => permission.name);
        const roleEntities =await permissionRepository.createQueryBuilder('p')
        .where('p.name IN (:...names)',{names})
        .getMany();
        const entities:PermissionEntity[] = [];
        permissions.forEach(permission=>{
            const roleCheck = roleEntities.find(roleEntity=>roleEntity.name === permission.name)
            if(!roleCheck){
                entities.push(new PermissionEntity({
                    name: permission.name,
                }))
            }
        })
        if(entities.length){
            await permissionRepository.save(entities);
        }
    }
}