import { IsInt, IsUUID } from 'class-validator';

export class SendAnswerDto {
  @IsUUID()
  gameId: string;

  @IsInt({ message: 'A alternativa deve ser um numero' })
  alternativeId: number;
}
