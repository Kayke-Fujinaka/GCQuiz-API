// import { BadRequestException, NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { QuestionsRepository } from 'src/repositories/questions.repository';
// import { UserRepliesRepository } from 'src/repositories/userReplies.repository';
// import { GetResultQuestionService } from '../services/get-result-question.service';
// import {
//   questions,
//   quizId,
//   userId,
//   userReply,
//   userReplyVoid,
// } from './mocks/answers';

// describe('GetResultQuestionService', () => {
//   let getResultQuestion: GetResultQuestionService;
//   let questionsRepository: QuestionsRepository;
//   let userRepliesRepository: UserRepliesRepository;

//   const mockQuestionRepository = {
//     getQuestionById: jest.fn(),
//   };
//   const mockUserRepliesRepository = {
//     create: jest.fn(),
//     save: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         GetResultQuestionService,
//         {
//           provide: getRepositoryToken(QuestionsRepository),
//           useValue: mockQuestionRepository,
//         },
//         {
//           provide: getRepositoryToken(UserRepliesRepository),
//           useValue: mockUserRepliesRepository,
//         },
//       ],
//     }).compile();

//     getResultQuestion = module.get<GetResultQuestionService>(
//       GetResultQuestionService,
//     );

//     questionsRepository = module.get<QuestionsRepository>(
//       getRepositoryToken(QuestionsRepository),
//     );

//     userRepliesRepository = module.get<UserRepliesRepository>(
//       getRepositoryToken(UserRepliesRepository),
//     );
//   });

//   it('should be defined', () => {
//     expect(getResultQuestion).toBeDefined();
//     expect(questionsRepository).toBeDefined();
//     expect(userRepliesRepository).toBeDefined();
//   });

//   beforeEach(() => {
//     mockQuestionRepository.getQuestionById.mockReset();
//   });

//   describe('execute', () => {
//     it('should be able to return a result of questions', async () => {
//       mockQuestionRepository.getQuestionById.mockReturnValue(questions);

//       const result = await getResultQuestion.execute(userId, userReply, quizId);

//       expect(result).toMatchObject({
//         isCorrect: questions.answers[0].isCorrect,
//       });
//       expect(mockQuestionRepository.getQuestionById).toHaveBeenCalledTimes(1);
//     });

//     it('should be able to return a exception when does not to find a question', async () => {
//       mockQuestionRepository.getQuestionById.mockReturnValue(null);
//       expect(
//         getResultQuestion.execute(userId, userReply, quizId),
//       ).rejects.toBeInstanceOf(NotFoundException);
//       expect(mockQuestionRepository.getQuestionById).toHaveBeenCalledTimes(1);
//     });

//     it('should be able to return a exception when user reply is empty', async () => {
//       expect(
//         getResultQuestion.execute(userId, userReplyVoid, quizId),
//       ).rejects.toBeInstanceOf(BadRequestException);
//     });
//   });
// });
