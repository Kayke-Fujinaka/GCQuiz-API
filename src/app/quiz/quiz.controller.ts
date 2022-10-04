import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { Quiz } from '../../entities/quiz.entity';
import { FindAllQuiz } from './services/find-all-quiz.service';
import { FindOneQuizService } from './services/find-one-quiz.service';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
  constructor(
    private readonly findAllQuizService: FindAllQuiz,
    private readonly findOneQuizService: FindOneQuizService,
  ) {}

  @ApiOperation({ summary: 'getAll Quizzes' })
  @Get()
  async getAll(): Promise<Quiz[]> {
    return this.findAllQuizService.execute();
  }

  @ApiOperation({ summary: 'getOne Quiz By Id' })
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Quiz> {
    return this.findOneQuizService.execute(parseInt(id));
  }
}
