import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneQuizService } from 'src/app/quiz/services/find-one-quiz.service';
import { FindOneUserService } from 'src/app/user/services/find-one-user.service';
import { Game } from 'src/entities/game.entity';
import { Repository } from 'typeorm';
import { NewGameDto } from '../dtos/new-game.dto';

@Injectable()
export class NewGameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    private readonly findOneUserService: FindOneUserService,
    private readonly findOneQuizService: FindOneQuizService,
  ) {}

  async execute(body: NewGameDto) {
    const quiz = await this.findOneQuizService.execute(body.quizId);

    const user = await this.findOneUserService.execute(body.userId);

    const gameAlreadyStarted = user.games.find(
      (game) => game.finalizedAt === null,
    );

    if (gameAlreadyStarted) {
      return { gameExists: true, gameId: gameAlreadyStarted.id };
    }

    return this.gameRepository.save({
      user,
      quiz,
    });
  }
}
