// import { Category } from 'src/entities/category.entity';
// import { UserReply } from 'src/entities/userReply.entity';

// export const categoryId = '1';
// export const invalidCategoryId = '0';

// export const userId = '86a5b68d-2eb0-4421-8531-4a3b98b9841d';

// export const quizId = 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc';

// export const listCategories: Category[] = [
//   {
//     id: 1,
//     name: 'Tecnologia',
//     urlImage: 'http://image.com',
//     createdAt: '2022-02-26T12:00:00',
//     quizzes: [],
//     updatedAt: '',
//     questions: undefined,
//   },
//   {
//     id: 2,
//     name: 'Curiosidades',
//     urlImage: 'http://image.com',
//     createdAt: '2022-02-26T12:00:00',
//     quizzes: [],
//     updatedAt: '',
//     questions: undefined,
//   },
// ];

// export const questionsByCategoryVoid = [];

// export const questionsByCategory = [
//   {
//     id: 3,
//     categoryName: 'Curiosidades',
//     urlImage: 'https://brasilescola.uol.com.br/curiosidades',
//     createdAt: '2022-08-23T20:42:26.804Z',
//     updatedAt: '2022-08-23T20:42:26.804Z',
//     questions: [
//       {
//         id: 1,
//         questionName: 'Normalmente, quantos litros de sangue uma pessoa tem?',
//         points: 1,
//         createdAt: '2022-08-23T20:42:26.804Z',
//         updatedAt: '2022-08-23T20:42:26.804Z',
//         answers: [
//           {
//             d: 4,
//             reply:
//               'É a soma da metade total das vendas de uma empresa, em um certo período, a partir de sua atividade comercial.a',
//             isCorrect: false,
//             createdAt: '2022-08-23T20:42:26.804Z',
//             updatedAt: '2022-08-23T20:42:26.804Z',
//           },
//           {
//             id: 5,
//             reply: 'É a ruptura de um osso.',
//             isCorrect: false,
//             createdAt: '2022-08-23T20:42:26.804Z',
//             updatedAt: '2022-08-23T20:42:26.804Z',
//           },
//         ],
//       },
//     ],
//   },
// ];

// export const questionsNotAnswred = [
//   {
//     id: 3,
//     categoryName: 'Curiosidades',
//     urlImage: 'https://brasilescola.uol.com.br/curiosidades',
//     createdAt: '2022-08-23T20:42:26.804Z',
//     updatedAt: '2022-08-23T20:42:26.804Z',
//     questions: [
//       {
//         id: 2,
//         questionName: 'Normalmente, quantos litros de sangue uma pessoa tem?',
//         points: 1,
//         createdAt: '2022-08-23T20:42:26.804Z',
//         updatedAt: '2022-08-23T20:42:26.804Z',
//         answers: [
//           {
//             id: 6,
//             reply: 'Resposta 1',
//           },
//           {
//             id: 7,
//             reply: 'Resposta 2',
//           },
//         ],
//       },
//       {
//         id: 3,
//         questionName: 'Normalmente, quantos litros de sangue uma pessoa tem?',
//         points: 1,
//         createdAt: '2022-08-23T20:42:26.804Z',
//         updatedAt: '2022-08-23T20:42:26.804Z',
//         answers: [
//           {
//             id: 11,
//             reply: 'Resposta 1',
//           },
//           {
//             id: 12,
//             reply: 'Resposta 2',
//           },
//         ],
//       },
//     ],
//   },
// ];

// export const listCategoriesVoid: Category[] = [];

// export const userReplies: UserReply[] = [
//   {
//     id: '65',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
// ];

// export const userRepliesFull: UserReply[] = [
//   {
//     id: '1',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '2',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '3',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '4',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '5',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '6',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '7',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '8',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '9',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
//   {
//     id: '10',
//     questionId: 9,
//     // quizId: 'daf7f602-0130-4e85-9bfe-fe1a4eb4f6dc',
//     replyId: 43,
//     isCorrect: false,
//     createdAt: '2022-09-09T01:50:36.461Z',
//     // userId: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
//     quiz: undefined,
//   },
// ];
