import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from 'src/entities/game.entity';
import { Question } from 'src/entities/question.entity';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { GetSortedQuestion } from './services/get-sorted-question.service';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@Controller('question')
@ApiTags('question')
export class QuestionController {
  constructor(private readonly getSortedQuestion: GetSortedQuestion) {}

  @ApiOperation({ summary: 'get Sorted Question by Quiz' })
  @Get(':quizId/:gameId')
  async getQuestionAndRepliesByQuiz(
    @Param('quizId') quizId: string,
    @Param('gameId') gameId: string,
  ): Promise<Question | Game> {
    return this.getSortedQuestion.execute(quizId, gameId);
  }
}
