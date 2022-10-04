import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Game } from 'src/entities/game.entity';
import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';
import { QuizController } from './quiz.controller';
import { FindAllQuiz } from './services/find-all-quiz.service';
import { FindOneQuizService } from './services/find-one-quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Quiz])],
  controllers: [QuizController],
  providers: [FindAllQuiz, JwtStrategy, FindOneQuizService],
})
export class QuizModule {}
