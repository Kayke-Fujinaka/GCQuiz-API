import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedQuestions1660326452772 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tb_questions (id, name, points, quiz_id) VALUES
          (1, 'O que é faturamento?', 1, 1),
          (2, 'O que não se deve fazer para organizar finanças?', 1, 1),
          (3, 'Quando ocorre a estagflação na economia de um país?', 1, 1),
          (4, 'Quando ocorre a estagflação na economia de um país?', 1, 1),
          (5, 'Quais são as funções básicas de uma moeda?', 1, 1),
          (6, 'O que é monopólio?', 1, 1),
          (7, 'O que é a Bolsa de Valores?', 1, 1),
          (8, 'O que é Taxa de Juros?', 1, 1),
          (9, 'A moeda Real foi adotada em qual plano?', 1, 1),
          (10, 'Qual a remuneração cobrada pelo empréstimo de dinheiro?', 1, 1),
          (11, 'O que significa a sigla “www” na internet?', 1, 2),
          (12, 'Qual a resolução de uma imagem Full HD?', 1, 2),
          (13, 'Quantos bits cabem em um byte?', 1, 2),
          (14, 'O que é HTML?', 1, 2),
          (15, 'Qual a principal diferença entre HTTP e HTTPS?', 1, 2),
          (16, 'O que são cookies?', 1, 2),
          (17, 'O que é hyperlink?', 1, 2),
          (18, 'O que é upload?', 1, 2),
          (19, 'O que é CPU?', 1, 2),
          (20, 'O que é Front-End?', 1, 2),
          (21, 'Normalmente, quantos litros de sangue uma pessoa tem?', 1, 3),
          (22, 'De quem é a frase “Penso, logo existo”?', 1, 3),
          (23, 'De onde é a invenção do chuveiro elétrico?', 1, 3),
          (24, 'Qual o nome do personagem animado mais famoso do mundo que é um rato?', 1, 3),
          (25, 'Que animal gruguleja?', 1, 3),
          (26, 'Qual o nome do metal cujo símbolo químico é o Au?', 1, 3),
          (27, 'Quem pintou o teto da capela sistina?', 1, 3),
          (28, 'Qual das opções é uma das 7 maravilhas do mundo?', 1, 3),
          (29, 'Em que ano e quem foi o primeiro presidente do Brasil?', 1, 3),
          (30, 'Em que país nasceu Clarice Lispector?', 1, 3)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM tb_questions WHERE id
          IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30)`,
    );
  }
}
