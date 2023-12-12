import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRolDto } from './dto/create-rol.dto';
import { Rol } from './rol.entity';
import { updateRolDto } from './dto/update-rol.dto';
import { JwtAuthGuard } from 'src/users/jwt.auth_guard';

@Controller('roles')
export class RolesController {

    constructor(private rolesService:RolesService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getRoles(): Promise<Rol[]>{
        return this.rolesService.getRoles()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getRol(@Param('id', ParseIntPipe) id:number): Promise<Rol>{
        return this.rolesService.getRol(id)
    }
    
    @Post()
    createRol(@Body() newRol:createRolDto){
        return this.rolesService.createRoles(newRol)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteRol(@Param('id', ParseIntPipe) id:number){
        return this.rolesService.deleteRol(id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateRol(@Param('id', ParseIntPipe) id:number, @Body() rol:updateRolDto){
        return this.rolesService.updateRol(id, rol)
    }

}
