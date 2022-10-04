// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CategoriesRepository } from 'src/repositories/categories.repository';
// import { GetAllCategoriesService } from '../services/getAllCategories.service';
// import { listCategories, listCategoriesVoid } from './mocks/categories';

// describe('Get All Categories', () => {
//   let getAllCategoriesService: GetAllCategoriesService;
//   let categoriesRepository: CategoriesRepository;

//   const mockRepository = {
//     getCategories: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         GetAllCategoriesService,
//         {
//           provide: getRepositoryToken(CategoriesRepository),
//           useValue: mockRepository,
//         },
//       ],
//     }).compile();

//     getAllCategoriesService = module.get<GetAllCategoriesService>(
//       GetAllCategoriesService,
//     );
//     categoriesRepository = module.get<CategoriesRepository>(
//       getRepositoryToken(CategoriesRepository),
//     );
//   });

//   it('should be defined', () => {
//     expect(getAllCategoriesService).toBeDefined();
//     expect(categoriesRepository).toBeDefined();
//   });

//   describe('execute', () => {
//     it('should return a categories list', async () => {
//       mockRepository.getCategories.mockReturnValue(listCategories);

//       const result = await getAllCategoriesService.execute();

//       expect(result.categories).toEqual(listCategories);
//       expect(result.categories.length).toEqual(listCategories.length);
//       expect(mockRepository.getCategories).toHaveBeenCalledTimes(1);
//     });

//     it('should return an empty categories list', async () => {
//       mockRepository.getCategories.mockReturnValue(listCategoriesVoid);

//       const result = await getAllCategoriesService.execute();

//       expect(result).toEqual({ categories: [] });
//       expect(result.categories.length).toEqual(listCategoriesVoid.length);
//       expect(mockRepository.getCategories).toHaveBeenCalledTimes(2);
//     });
//   });
// });
