import { IsBoolean } from 'class-validator';

export class ResultQuestion {
  @IsBoolean()
  isCorrect: boolean;
}
