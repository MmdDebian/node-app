import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { FilterInterface } from './interfaces/filter.interface';


@Injectable()
export class UserService {
  constructor(
    private readonly userRepository:UserRepository 
  ){}

  create(createUserDto: CreateUserDto) {
    const {
      name , 
      email ,
      family 
    } = createUserDto;

    return this.userRepository.create({name , email , family})
  }

  findAll(filter?:FilterInterface):User[]{
    return this.userRepository.find(filter)
  }
}
