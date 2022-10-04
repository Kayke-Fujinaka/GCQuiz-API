// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Quiz } from 'src/entities/quiz.entity';
// import { Repository } from 'typeorm';
// import { NewQuizService } from '../service/new-game.service';
// import { categoryId, quiz, quizExists, quizId, userId } from './mocks/quiz';

// describe('Initialize a new quiz game', () => {
//   let newQuizService: NewQuizService;
//   let quizRepository: Repository<Quiz>;

//   const mockRepository = {
//     findOne: jest.fn(),
//     save: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         NewQuizService,
//         {
//           provide: getRepositoryToken(Quiz),
//           useValue: mockRepository,
//         },
//       ],
//     }).compile();

//     newQuizService = module.get<NewQuizService>(NewQuizService);

//     quizRepository = module.get<Repository<Quiz>>(getRepositoryToken(Quiz));
//   });

//   it('should be defined', () => {
//     expect(newQuizService).toBeDefined();
//     expect(quizRepository).toBeDefined();
//   });

//   beforeEach(() => {
//     mockRepository.findOne.mockReset();
//     mockRepository.save.mockReset();
//   });

//   describe('execute', () => {
//     it('should be initialize a new quiz game', async () => {
//       mockRepository.findOne.mockReturnValue(undefined);
//       mockRepository.save.mockReturnValue(quiz);

//       const result = await newQuizService.execute({ userId, categoryId });

//       expect(result).toEqual({ quizId });
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });

//     it('should be return an exception when exists a quiz game', async () => {
//       mockRepository.findOne.mockReturnValue(quiz);

//       const result = await newQuizService.execute({ userId, categoryId });

//       expect(result).toMatchObject(quizExists);
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });
//   });
// });
