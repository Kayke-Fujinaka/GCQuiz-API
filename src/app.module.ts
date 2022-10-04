import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModule } from './app/answer/answer.module';
import { QuizModule } from './app/quiz/quiz.module';
import { QuestionModule } from './app/question/question.module';
import { GameModule } from './app/game/game.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      entities: ['dist/entities/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/database/migrations/',
      },
      migrationsRun: true,
    }),
    UserModule,
    QuizModule,
    GameModule,
    QuestionModule,
    AnswerModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
