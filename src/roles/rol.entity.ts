import { Entity,Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'roles'})
export class Rol{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({nullable:true, default:false})
    is_deleted:boolean

    @Column({nullable:true,type:'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    created_at:Date
    
    @Column({nullable:true,type:'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    updated_at:Date

}