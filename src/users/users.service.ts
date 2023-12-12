import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import {hash, compare} from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.Dto';
import { log } from 'console';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRespository: Repository<User>,
    private jwtAuthService: JwtService){}

    async createUser(user:createUserDto){
        const {password}= user;
        const plainToHash = await hash(password,10)
        user = {...user, password:plainToHash}
        const newUser = this.userRespository.create(user)
        return this.userRespository.save(newUser)
        
    }

    async login(user:LoginAuthDto){
        const {email,password}=user
        const findUser = await this.userRespository.findOne({
            where:{
                email
            }
        })

        if(!findUser) throw new HttpException('Usuario no encontrado', 404)

        const checkPassword = await compare(password,findUser.password)
        
        if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)

        const payload = {id:findUser.id, name:findUser.full_name}
        const token = await this.jwtAuthService.sign(payload)

        const data = {
            user:findUser,
            token,

        }

        return data
        
    }
 
}
