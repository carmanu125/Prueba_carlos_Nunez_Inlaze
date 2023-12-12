import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { LoginAuthDto } from './dto/login-auth.Dto';

@Controller('users')
export class UsersController {


    constructor(private userService:UsersService){}

    // @Post()
    // createUser(@Body() newUser:createUserDto){
    //     return this.userService.createUser(newUser)
    // }

    @Post('register')
    registerUser(@Body() user:createUserDto){
        return this.userService.createUser(user)
    }

    @Post('login')
    loginUser(@Body() user:LoginAuthDto){
        return this.userService.login(user)
    }
}
