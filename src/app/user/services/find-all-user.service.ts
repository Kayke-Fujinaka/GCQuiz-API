import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { IsNull, Repository } from 'typeorm';

export class FindAllUserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        deletedAt: IsNull(),
      },
      relations: ['games'],
    });
  }
}
