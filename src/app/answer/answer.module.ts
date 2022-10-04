import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alternative } from 'src/entities/alternative.entity';
import { GameAnswer } from 'src/entities/game-answer.entity';
import { Game } from 'src/entities/game.entity';
import { FindOneGameService } from '../game/service/find-one-game.service';
import { AnswerController } from './answer.controller';
import { SendAnswerService } from './services/send-answer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alternative, GameAnswer, Game])],
  providers: [SendAnswerService, FindOneGameService],
  controllers: [AnswerController],
})
export class AnswerModule {}
