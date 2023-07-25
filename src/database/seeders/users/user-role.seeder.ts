import { RoleEntity } from "src/roles/entities/role.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

const usersRoles = [
    {
        name: 'manager',
        phonenumber: 62123456
    },
    {
        name: 'operator',
        phonenumber: 62123456
    }
]
export class UserRoleSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        try {
               const roleRepository = dataSource.getRepository(RoleEntity);
        const userRepository = dataSource.getRepository(UserEntity);
        const roleNames = usersRoles.map(userRole=>userRole.name);
        const userPhonenumber = usersRoles.map(userRole=>userRole.phonenumber)
        const roles = await roleRepository.createQueryBuilder('roles')
        .where('roles.name IN (:...names)',{names: roleNames})
        .getMany()
        const users = await userRepository.createQueryBuilder('users')
        .leftJoinAndSelect('users.roles','roles')
        .where('users.phonenumber IN (:...phonenumber)',{phonenumber: userPhonenumber})
        .getMany();
        usersRoles.forEach(userRole=>{
            users.forEach(user=>{
                if(user.phonenumber == userRole.phonenumber){
                    const roleCheck = user.roles.find(role=>role.name === userRole.name)
                    if(!roleCheck){
                        user.roles.push(roles.find(role=>role.name === userRole.name))
                    }
                }
            })
        })
        console.log(users);
        const entities =await userRepository.save(users)     
        } catch (error) {
            console.log(error)
        }

    }
    
}