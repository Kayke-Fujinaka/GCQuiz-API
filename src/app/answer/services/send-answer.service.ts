import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneGameService } from 'src/app/game/service/find-one-game.service';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { Alternative } from 'src/entities/alternative.entity';
import { GameAnswer } from 'src/entities/game-answer.entity';
import { Game } from 'src/entities/game.entity';
import { Repository } from 'typeorm';
import { ResultQuestion } from '../dtos/result-question.dto';
import { SendAnswerDto } from '../dtos/send-answer.dto';

@Injectable()
export class SendAnswerService {
  constructor(
    @InjectRepository(GameAnswer)
    private readonly gameAnswerRepository: Repository<GameAnswer>,
    @InjectRepository(Alternative)
    private readonly alternativeRepository: Repository<Alternative>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    private readonly findOneGameService: FindOneGameService,
  ) {}

  async execute(sendAnswerDto: SendAnswerDto): Promise<ResultQuestion> {
    const game = await this.findOneGameService.execute(sendAnswerDto.gameId);

    if (game.finalizedAt)
      throw new BadRequestError('Esse game já foi finalizado!');

    const alternative = await this.alternativeRepository.findOne({
      where: { id: sendAnswerDto.alternativeId },
    });

    if (!alternative) throw new NotFoundError('Essa alternativa não existe!');

    await this.gameAnswerRepository.save({
      game,
      alternative,
    });

    if (alternative.isCorrect)
      this.gameRepository.update(sendAnswerDto.gameId, {
        amountOfCorrect: game.amountOfCorrect + 1,
      });
    else
      this.gameRepository.update(sendAnswerDto.gameId, {
        amountOfIncorrect: game.amountOfIncorrect + 1,
      });

    return { isCorrect: alternative.isCorrect };
  }
}
