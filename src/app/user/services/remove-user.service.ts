import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { FindOneUserService } from './find-one-user.service';

@Injectable()
export class RemoveUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly findOneUserService: FindOneUserService,
  ) {}

  async execute(id: string): Promise<UpdateResult> {
    await this.findOneUserService.execute(id);

    return this.userRepository.softDelete(id);
  }
}
