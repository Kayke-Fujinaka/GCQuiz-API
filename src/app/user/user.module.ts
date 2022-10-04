import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { BcryptProvider } from 'src/providers/bcrypt/bcrypt.provider';
import { AuthModule } from '../auth/auth.module';
import { CreateUserService } from './services/create-user.service';
import { FindAllUserService } from './services/find-all-user.service';
import { RemoveUserService } from './services/remove-user.service';
import { UserController } from './user.controller';
import { FindOneUserService } from './services/find-one-user.service';
import { UpdateUserService } from './services/update-user.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([User])],
  providers: [
    CreateUserService,
    FindOneUserService,
    FindAllUserService,
    RemoveUserService,
    BcryptProvider,
    UpdateUserService,
  ],
  controllers: [UserController],
})
export class UserModule {}
