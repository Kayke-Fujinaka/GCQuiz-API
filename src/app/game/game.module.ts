import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Game } from 'src/entities/game.entity';
import { User } from 'src/entities/user.entity';
import { FindOneQuizService } from '../quiz/services/find-one-quiz.service';
import { FindOneUserService } from '../user/services/find-one-user.service';
import { GameController } from './game.controller';
import { FinalizeGameService } from './service/finalize-game.service';
import { FindOneGameService } from './service/find-one-game.service';

import { NewGameService } from './service/new-game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Quiz, User])],
  providers: [
    NewGameService,
    FinalizeGameService,
    FindOneGameService,
    FindOneQuizService,
    FindOneUserService,
  ],
  controllers: [GameController],
  exports: [FinalizeGameService],
})
export class GameModule {}
