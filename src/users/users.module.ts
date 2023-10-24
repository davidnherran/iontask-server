import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersProjectsEntity } from './entities/users.projects.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, UsersProjectsEntity])
  ], 
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
