import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UserService],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
})
export class UsersModule {}
