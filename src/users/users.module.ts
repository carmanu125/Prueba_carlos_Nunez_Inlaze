import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'60s'}
    })
  ],
  controllers: [UsersController],
  providers: [UsersService,JwtStrategy]
})
export class UsersModule {}
