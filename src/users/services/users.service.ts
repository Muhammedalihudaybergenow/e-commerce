import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){

  }
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      password: createUserDto.password,
      phonenumber: createUserDto.phonenumber,
      username: createUserDto.username
    })
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
