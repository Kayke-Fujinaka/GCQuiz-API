import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictError } from 'src/common/errors/types/ConflictError';
import { User } from 'src/entities/user.entity';
import { BcryptProvider } from 'src/providers/bcrypt/bcrypt.provider';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(BcryptProvider)
    private readonly bcryptProvider: BcryptProvider,
  ) {}

  async execute(data: CreateUserDto): Promise<User> {
    const userExists = await this.usersRepository.findOne({
      email: data.email,
    });

    if (userExists) throw new ConflictError('E-mail já cadastrado');

    const user = this.usersRepository.create({
      ...data,
      password: await this.bcryptProvider.genHash(data.password),
    });

    return this.usersRepository.save(user);
  }
}
