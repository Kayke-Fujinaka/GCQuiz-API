import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinalizeGameService } from 'src/app/game/service/finalize-game.service';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { Game } from 'src/entities/game.entity';
import { Question } from 'src/entities/question.entity';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetSortedQuestion {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    private readonly finalizeGameService: FinalizeGameService,
  ) {}

  async execute(quizId: string, gameId: string): Promise<Question | Game> {
    const quiz = await this.quizRepository.findOne({
      where: { id: quizId },
      relations: ['questions', 'questions.alternatives'],
    });

    if (!quiz.questions)
      throw new NotFoundError('Nenhuma questão encontrada para esse quiz');

    const game = await this.gameRepository.findOne({
      where: { id: gameId },
      relations: [
        'gameAnswers',
        'gameAnswers.alternative',
        'gameAnswers.alternative.question',
      ],
    });

    if (game.gameAnswers.length === quiz.questions.length) {
      return this.finalizeGameService.execute(gameId);
    }

    const questions = quiz.questions.filter(
      (question) =>
        !game.gameAnswers.some(
          (answer) => answer.alternative.question.id === question.id,
        ),
    );

    return questions.sort(() => Math.random() - 0.5).shift();
  }
}
