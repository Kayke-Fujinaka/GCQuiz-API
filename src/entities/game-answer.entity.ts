import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Alternative } from './alternative.entity';
import { Game } from './game.entity';

@Entity('tb_game_answers')
export class GameAnswer {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Alternative)
  @JoinColumn({ name: 'alternative_id' })
  alternative: Alternative;

  @ManyToOne(() => Game, (game) => game.gameAnswers)
  @JoinColumn({ name: 'quiz_id' })
  game: Game;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
