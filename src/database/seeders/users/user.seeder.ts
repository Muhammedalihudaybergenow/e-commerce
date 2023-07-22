import { UserEntity } from "src/users/entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import * as bcrypt from "bcrypt";
const user = {
    name: 'Muhammedali',
    phonenumber: 62123456,
    password: 'Hello213'
}
export class UserSeeder implements Seeder {
    async run(dataSource: DataSource,factoryManager: SeederFactoryManager){
        const userRepository = dataSource.createEntityManager().getRepository(UserEntity)
        const userCheck = await userRepository.findOneBy({
            phonenumber: user.phonenumber
        })
        if(!userCheck){
            const entity = new UserEntity({
                password: bcrypt.hashSync(user.password,10),
                username: user.name,
                phonenumber: user.phonenumber
            })
            await userRepository.save(entity);
        }
    }
}