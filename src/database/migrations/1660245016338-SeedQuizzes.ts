import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategories1660245016338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tb_quizzes (id, name, url_image) VALUES
        (1, 'Finanças', 'https://edumoreira.com.br/9-sugestoes-para-colocar-suas-financas-em-ordem/'),
        (2, 'Tecnologia', 'https://blog.portaleducacao.com.br/o-que-e-tecnologia/'),
        (3, 'Curiosidades', 'https://brasilescola.uol.com.br/curiosidades')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM tb_quizzes WHERE id
        IN (1, 2, 3)`,
    );
  }
}
