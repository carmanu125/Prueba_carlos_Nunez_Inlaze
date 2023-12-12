import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Tree } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'root',
    database:'ilaze-db',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true
  }),
   UsersModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
