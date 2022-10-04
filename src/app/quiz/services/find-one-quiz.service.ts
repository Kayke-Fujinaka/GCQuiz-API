import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneQuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly categoriesRepository: Repository<Quiz>,
  ) {}

  async execute(id: number): Promise<Quiz> {
    const quiz = this.categoriesRepository.findOne({
      where: { id },
      relations: ['questions'],
    });

    if (!quiz) throw new NotFoundError('Quiz não enontrado');

    return quiz;
  }
}
