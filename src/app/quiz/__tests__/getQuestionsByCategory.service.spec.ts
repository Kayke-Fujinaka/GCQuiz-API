// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CategoriesRepository } from 'src/repositories/categories.repository';
// import { UserRepliesRepository } from 'src/repositories/userReplies.repository';
// import { GetQuestionsByCategory } from '../services/get-questions-by-category.service';
// import { BadRequestException } from '@nestjs/common';
// import {
//   categoryId,
//   invalidCategoryId,
//   questionsByCategory,
//   questionsByCategoryVoid,
//   questionsNotAnswred,
//   quizId,
//   userId,
//   userReplies,
//   userRepliesFull,
// } from './mocks/categories';

// describe('Get Questions By Category', () => {
//   let getQuestionsByCategoryService: GetQuestionsByCategory;
//   let categoriesRepository: CategoriesRepository;
//   let userRepliesRepository: UserRepliesRepository;

//   const mockCategoriesRepository = {
//     getQuestionAndRepliesByCategory: jest.fn(),
//     filter: jest.fn(),
//   };

//   const mockUserRepliesRepository = {
//     getRepliesByUser: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         GetQuestionsByCategory,
//         {
//           provide: getRepositoryToken(CategoriesRepository),
//           useValue: mockCategoriesRepository,
//         },
//         {
//           provide: getRepositoryToken(UserRepliesRepository),
//           useValue: mockUserRepliesRepository,
//         },
//       ],
//     }).compile();

//     getQuestionsByCategoryService = module.get<GetQuestionsByCategory>(
//       GetQuestionsByCategory,
//     );
//     categoriesRepository =
//       module.get<CategoriesRepository>(CategoriesRepository);
//     userRepliesRepository = module.get<UserRepliesRepository>(
//       UserRepliesRepository,
//     );
//   });

//   it('should be defined', () => {
//     expect(getQuestionsByCategoryService).toBeDefined();
//     expect(categoriesRepository).toBeDefined();
//     expect(userRepliesRepository).toBeDefined();
//   });

//   beforeEach(() => {
//     mockCategoriesRepository.getQuestionAndRepliesByCategory.mockReset();
//     mockUserRepliesRepository.getRepliesByUser.mockReset();
//   });

//   describe('execute', () => {
//     it('should return an exception when user answered all questions', async () => {
//       mockCategoriesRepository.getQuestionAndRepliesByCategory.mockReturnValue(
//         questionsByCategoryVoid,
//       );
//       mockUserRepliesRepository.getRepliesByUser.mockReturnValue(
//         userRepliesFull,
//       );
//       expect(
//         getQuestionsByCategoryService.execute(categoryId, userId, quizId),
//       ).rejects.toBeInstanceOf(BadRequestException);

//       expect(
//         mockCategoriesRepository.getQuestionAndRepliesByCategory,
//       ).toBeCalledTimes(1);
//     });

//     it('should return an exception when categories dont contain questions', async () => {
//       expect(
//         getQuestionsByCategoryService.execute(
//           invalidCategoryId,
//           userId,
//           quizId,
//         ),
//       ).rejects.toBeInstanceOf(BadRequestException);
//     });
//   });
// });
