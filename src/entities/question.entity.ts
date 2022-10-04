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
import { Alternative } from './alternative.entity';
import { Quiz } from './quiz.entity';

@Entity('tb_questions')
export class Question {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('character varying', { length: 255 })
  name: string;

  @Column('int', { name: 'points' })
  points: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: 'quiz_id' })
  quiz: Quiz;

  @OneToMany(() => Alternative, (alternative) => alternative.question)
  alternatives: Alternative[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, default: '' })
  @Exclude()
  updatedAt: string;
}
