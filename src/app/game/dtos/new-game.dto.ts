import { IsNumber, IsString } from 'class-validator';

export class NewGameDto {
  @IsString()
  userId: string;

  @IsNumber()
  quizId: number;
}
