import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/entities/game.entity';
import { Repository } from 'typeorm';
import { FindOneGameService } from './find-one-game.service';

@Injectable()
export class FinalizeGameService {
  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
    private readonly findOneGameService: FindOneGameService,
  ) {}

  async execute(gameId: string) {
    const game = await this.findOneGameService.execute(gameId);

    const gameFinalized = await this.gameRepository.save({
      ...game,
      finalizedAt: new Date(),
    });

    return gameFinalized;
  }
}
