import { Exclude } from 'class-transformer';
import { GenderEnum } from 'src/enums/Gender';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Game } from './game.entity';

@Entity('tb_users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ name: 'accept_terms' })
  acceptTerms: boolean;

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, default: '' })
  @Exclude()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  @Exclude()
  deletedAt: string;
}
