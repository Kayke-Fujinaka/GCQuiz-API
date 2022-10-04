import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { Game } from 'src/entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneGameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async execute(id: string) {
    const game = await this.gameRepository.findOne({
      where: { id },
      relations: ['quiz', 'gameAnswers', 'gameAnswers.alternative'],
    });

    if (!game) throw new NotFoundError('Jogo não encontrado');

    return game;
  }
}
