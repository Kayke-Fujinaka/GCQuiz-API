import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { GameAnswer } from './game-answer.entity';

@Entity('tb_alternatives')
export class Alternative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying')
  name: string;

  @Column('boolean', { name: 'is_correct' })
  @Exclude()
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.alternatives)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @OneToMany(() => GameAnswer, (quizAnswer) => quizAnswer.game)
  gameAnswers: GameAnswer[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, default: '' })
  @Exclude()
  updatedAt: string;
}
