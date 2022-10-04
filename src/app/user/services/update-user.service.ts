import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { FindOneUserService } from './find-one-user.service';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly findOneUserService: FindOneUserService,
  ) {}

  async execute(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    await this.findOneUserService.execute(id);

    return this.userRepository.update(id, { ...updateUserDto });
  }
}
