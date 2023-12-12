import { Injectable } from '@nestjs/common';
import { Rol } from './rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRolDto } from './dto/create-rol.dto';
import { updateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(Rol) private rolRespository: Repository<Rol>){}

    createRoles(rol:createRolDto){
        const newRol= this.rolRespository.create(rol)
        return  this.rolRespository.save(newRol)
    }

    getRoles(){
        return this.rolRespository.find()
    }

    getRol(id:number){
        return this.rolRespository.findOne({
            where:{
                id
            }
        })
    }

    deleteRol(id:number){
        return this.rolRespository.delete({id})
    }

    updateRol(id:number, rol:updateRolDto){
        return this.rolRespository.update({id}, rol)
    }
}
