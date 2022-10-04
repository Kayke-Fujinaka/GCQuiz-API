import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { User } from './user.entity';
import { GameAnswer } from './game-answer.entity';

@Entity('tb_games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'amount_of_correct', nullable: true, default: 0 })
  amountOfCorrect: number;

  @Column({ name: 'amount_of_incorrect', nullable: true, default: 0 })
  amountOfIncorrect: number;

  @Column({ name: 'fineshed_time', nullable: true })
  fineshedTime: number;

  @Column({ name: 'finalized_at', type: 'timestamp', nullable: true })
  finalizedAt: Date;

  @ManyToOne(() => Quiz, (quiz) => quiz.games)
  @JoinColumn({ name: 'quiz_id' })
  quiz: Quiz;

  @ManyToOne(() => User, (user) => user.games)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => GameAnswer, (gameAnswers) => gameAnswers.game)
  gameAnswers: GameAnswer[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  @Exclude()
  deletedAt: string;
}
