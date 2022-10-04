import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllQuiz {
  constructor(
    @InjectRepository(Quiz)
    private readonly categoriesRepository: Repository<Quiz>,
  ) {}

  async execute(): Promise<Quiz[]> {
    return this.categoriesRepository.find({
      relations: ['questions'],
    });
  }
}
