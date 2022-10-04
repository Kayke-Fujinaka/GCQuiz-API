import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Game } from 'src/entities/game.entity';
import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';
import { QuestionController } from './question.controller';
import { GetSortedQuestion } from './services/get-sorted-question.service';
import { FinalizeGameService } from '../game/service/finalize-game.service';
import { FindOneGameService } from '../game/service/find-one-game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Quiz])],
  controllers: [QuestionController],
  providers: [
    GetSortedQuestion,
    JwtStrategy,
    FinalizeGameService,
    FindOneGameService,
  ],
})
export class QuestionModule {}
