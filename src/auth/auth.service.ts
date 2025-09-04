import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

import { User } from './entities';
import { RegisterUserDto } from './dto/register-user-dto';
import { LoginUserDto } from './dto/login-user-dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}


  async register(registerUserDto: RegisterUserDto) {

    const { password, ...rest } = registerUserDto;

    const hashedPassword = bcrypt.hashSync(password, 10)
    const id = uuid()

    const userToInsert = {
      id,
      password: hashedPassword,
      isActive: true,
      ...rest
    }

    try {

      await this.userRepository.insert(userToInsert)

      // return jwt token
      return userToInsert
      
    } catch (error) {
      this.handleDBException(error)
    }
  }

  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto
    
    const findedUser = await this.userRepository.findOne( {where: { email } })

    if( !findedUser ) throw new BadRequestException('User not found')
    
    if( !bcrypt.compareSync(password, findedUser.password ) ) throw new BadRequestException('Incorrect password')

    return {
      id: findedUser.id,
      fullName: findedUser.fullName,
      email: findedUser.email
    }
  }


  getAllUsers() {

    return this.userRepository.find({ select: ['fullName', 'email'], where: { isActive: true} })

  }


  private handleDBException( error: any ){

    if(error.code === '23505'){
      throw new BadRequestException(error.detail)
    } else {
      throw new InternalServerErrorException('Unexpected error, check server logs')
    }

  }
}
