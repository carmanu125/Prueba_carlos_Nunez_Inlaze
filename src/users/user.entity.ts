import { Entity,Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'users'})
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    full_name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    phone:string

    @Column()
    role:number

    @Column({nullable:true, default:false})
    is_deleted:boolean

    @Column({nullable:true,type:'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    created_at:Date
    
    @Column({nullable:true,type:'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    updated_at:Date

}