import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['games'],
    });

    if (!user) throw new NotFoundError('Usuário não encontrado!');

    return user;
  }
}
