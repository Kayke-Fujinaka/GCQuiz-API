import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { Game } from './game.entity';

@Entity('tb_quizzes')
export class Quiz {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('character varying', { length: 100 })
  name: string;

  @Column('character varying', { name: 'url_image', length: 255 })
  urlImage: string;

  @OneToMany(() => Game, (game) => game.quiz)
  games: Game[];

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, default: '' })
  @Exclude()
  updatedAt: string;
}
