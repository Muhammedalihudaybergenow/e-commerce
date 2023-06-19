import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){}
  async create(createUserDto: CreateUserDto) {
    const hash = bcrypt.hashSync(createUserDto.password,10);
    return this.userRepository.save({
      password: hash,
      phonenumber: createUserDto.phonenumber,
      username: createUserDto.username
    })
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({
      id
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const {password,phonenumber,username} = updateUserDto;
    const entity = new UserEntity({
      id,
      phonenumber,
      username
    })
    if(password){
      entity.password = bcrypt.hashSync(password,10)
    }
    return this.userRepository.save(entity);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
