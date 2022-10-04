import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedAnswers1660330527399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tb_alternatives (id, name, is_correct, question_id) VALUES
                (1, 'É a subtração total das vendas de uma empresa, em um certo período, a partir de sua atividade comercial.', false, 1),
                (2, 'É a soma total das vendas de uma empresa, em um certo período, a partir de sua atividade comercial.', true, 1),
                (3, 'É a soma total das vendas de uma empresa, em um certo período, a partir de sua atividade comercial – seja comércio ilegal, prestação de serviços ou indústria.', false, 1),
                (4, 'É a soma da metade total das vendas de uma empresa, em um certo período, a partir de sua atividade comercial.a', false, 1),
                (5, 'É a ruptura de um osso.', false, 1),

                (6, 'Estabelecer metas para economizar.', false, 2),
                (7, 'Restringir gastos diários.', false, 2),
                (8, 'Ficar longe de dívidas.', false, 2),
                (9, 'Gastar todo o dinheiro.', true, 2),
                (10, 'Ter uma reserva de emergência.', false, 2),

                (11, 'Quando há aumento dos preços e não há crescimento do PIB.', true, 3),
                (12, 'Quando os preços permanecem inalterados e não há crescimento do PIB.', false, 3),
                (13, 'Quando há queda nos preços e crescimento do PIB.', false, 3),
                (14, 'Quando há aumento dos preços e crescimento do PIB.', false, 3),
                (15, 'Quando há um super aumento dos preços e crescimento do PIB.', false, 3),

                (16, 'É quando аѕ еmрrеѕаѕ fаzеm еmрréѕtіmоѕ јuntо ао bаnсо сеntrаl раrа раgаr dívіdаѕ trіbutárіаѕ.', false, 4),
                (17, 'É а rесеіtа dесоrrеntе dа еmіѕѕãо dе mоеdа роr раrtе dо gоvеrnо.', true, 4),
                (18, 'É quando о gоvеrnо faz um еmрréѕtіmо em outro раíѕ.', false, 4),
                (19, 'É quando о gоvеrnо fіnаnсіа оbrаѕ аtrаvéѕ dо ВNDЕЅ раrа еmрrеѕаѕ рrіvаdаѕ.', false, 4),
                (20, 'É quando o governo distribui dinheiro nas praças públicas do país.', false, 4),

                (21, 'Ѕеr соnfіávеl е еѕtávеl.', false, 5),
                (22, 'Ѕеr unіdаdе dе соntа, rеѕеrvа dе vаlоr е mеіо dе trоса.', true, 5),
                (23, 'Роѕѕuіr lаѕtrо, dо tіро раdrãо-оurо, е gаrаntіr а trоса dе mеrсаdоrіаѕ.', false, 5),
                (24, 'Реrmіtіr а trоса dе bеnѕ е ѕеrvіçоѕ еm quаlquеr раíѕ, bеm соmо ѕеrvіr dе unіdаdе dе соntа.', false, 5),
                (25, 'Ser apenas uma unidade de compra em jogos onlines.', false, 5),

                (26, 'Um jogo de tabuleiro.', false, 6),
                (27, 'Uma estrutura de Mercado que se perpetua para sempre explorando o consumidor.', false, 6),
                (28, 'Uma estrutura resultante de uma falha de mercado.', false, 6),
                (29, 'É um momento do processo de mercado que pode se manter por economia de escala ou intervenção estatal.', true, 6),
                (30, 'É quanto uma pessoa se encontra no topo da economia tendo o poder e controle de todos abaixo.', false, 6),

                (31, 'Mercado organizado onde se negociam ações de sociedades de capital aberto e outros valores mobiliários.', true, 7),
                (32, 'Uma empresa que compra e vende ações de outras empresas, e demais títulos mobiliários.', false, 7),
                (33, 'Mercado organizado onde se negociam ações de sociedades de capital misto e outros valores imobiliários.', false, 7),
                (34, 'Onde os banqueiros trabalham.', false, 7),
                (35, 'Uma bolsa com muito dinheiro.', false, 7),

                (36, 'É o valor do dinheiro no tempo.', true, 8),
                (37, 'É o lucro do empreendedor.', false, 8),
                (38, 'É o lucro do banqueiro.', false, 8),
                (39, 'É o que torna meu cheque especial.', false, 8),
                (40, 'É o preço pelo juramento de uma pessoa.', false, 8),

                (41, 'Plano Verão.', false, 9),
                (42, 'Plano do Mal.', false, 9),
                (43, 'Plano Cruzadas.', false, 9),
                (44, 'Plano Real.', true, 9),
                (45, 'Plano Collor.', false, 9),

                (46, 'Crédito.', false, 10),
                (47, 'Poupança.', false, 10),
                (48, 'Pobreza.', false, 10),
                (49, 'Riqueza.', false, 10),
                (50, 'Juros.', true, 10),

                (51, 'World Wide Web.', true, 11),
                (52, 'Web World Wide.', false, 11),
                (53, 'Wide Web World.', false, 11),
                (54, 'World Web Wide.', false, 11),
                (55, 'World Web Wiz.', false, 11),

                (56, '1920 x 1080', true, 12),
                (57, '1280 x 720', false, 12),
                (58, '4000 x 2000', false, 12),
                (59, '2560 x 1440', false, 12),
                (60, '1762 x 320', false, 12),

                (61, '8 bits', true, 13),
                (62, '4 bits', false, 13),
                (63, '16 bits', false, 13),
                (64, '12 bits', false, 13),
                (65, '1 bit', false, 13),

                (66, 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.', true, 14),
                (67, 'HTML é uma forma de estilização em cascata.', false, 14),
                (68, 'HTML é uma magia.', false, 14),
                (69, 'HTML é uma linguagem de programação utilizada na construção de páginas na Web.', false, 14),
                (70, 'HTML é uma linguagem de marcação utilizada na desconstrução de páginas na Web.', false, 14),

                (71, 'O HTTP é um tipo de servidor livre e o HTTPS é um tipo de servidor pago.', false, 15),
                (72, 'Através do HTTPS os navegadores requisitam as páginas da WEB e a recebem. O HTTP é um HTTPS com princípios de segurança.', false, 15),
                (73, 'Através do HTTP os navegadores requisitam as páginas da WEB e a recebem. O HTTPS é um HTTP com princípios de segurança.', true, 15),
                (74, 'O HTTP é um tipo de servidor privado e o HTTPS é um tipo de servidor pago.', false, 15),
                (75, 'O HTTP é um tipo de servidor livre e o HTTPS também é um tipo de servidor livre.', false, 15),

                (76, 'Falha ou erro no código de um programa.', false, 16),
                (77, 'Armazenam as preferências dos usuários em um determinado site.', true, 16),
                (78, 'Um fragmento prejudicial de software.', false, 16),
                (79, 'Um alimento.', false, 16),
                (80, 'Um bug no código', false, 16),

                (81, 'Qualquer texto que se coloca em uma página da web em que você clica e é direcionado para outra.', true, 17),
                (82, 'Um link em que a escrita é muito grande.', false, 17),
                (83, 'Uma página que te direciona para outra instantaneamente.', false, 17),
                (84, 'É um link que é super-herói.', false, 17),
                (85, 'Apenas um link normal.', false, 17),

                (86, 'Ato de enviar um arquivo para um computador.', false, 18),
                (87, 'Ato de receber um arquivo da internet..', false, 18),
                (88, 'Ato de copiar um arquivo de outro computador.', false, 18),
                (89, 'Ato de enviar uma mensagem.', false, 18),
                (90, 'Ato de receber uma mensagem de texto.', false, 18),

                (91, 'Central Processing Unit.', true, 19),
                (92, 'Central Political Unit.', false, 19),
                (93, 'Central Power Unit.', false, 19),
                (94, 'Control Processing Unity.', false, 19),
                (95, 'Conversor Processing Unity.', false, 19),

                (96, 'É o desenvolvimento da interface gráfica do usuário de um site.', true, 20),
                (97, 'É a parte relacionada com servidores, bancos de dados, segurança, estrutura, gerenciamento de conteúdo e atualizações.', false, 20),
                (98, 'Fim do mundo.', false, 20),
                (99, 'Uma requisição do cliente para o servidor.', false, 20),
                (100, 'É uma funcionalidade que conecta sistemas, softwares e aplicativos.', false, 20),

                (101, '2 a 4 litros.', false, 21),
                (102, '4 a 6 litros.', true, 21),
                (103, 'Não possui litros de sangue.', false, 21),
                (104, '500 ml.', false, 21),
                (105, '7,5 litros.', false, 21),

                (106, 'Francis Bacon.', false, 22),
                (107, 'Karl Marx.', false, 22),
                (108, 'Platão.', false, 22),
                (109, 'Descartes.', true, 22),
                (110, 'Sócrates.', false, 22),

                (111, 'Bélgica.', false, 23),
                (112, 'Barbados.', false, 23),
                (113, 'Bangladesh.', false, 23),
                (114, 'Bolívia.', false, 23),
                (115, 'Brasil.', true, 23),

                (116, 'Miguel Maui.', false, 24),
                (117, 'Rato de Botas.', false, 24),
                (118, 'Michel Mouse.', false, 24),
                (119, 'Batoré.', false, 24),
                (120, 'Mickey Mouse.', true, 24),

                (121, 'O peru.', true, 25),
                (122, 'O papagaio.', false, 25),
                (123, 'A garça.', false, 25),
                (124, 'O pombo.', false, 25),
                (125, 'O pavão.', false, 25),

                (126, 'Cobre.', false, 26),
                (127, 'Prata.', false, 26),
                (128, 'Mercúrio.', false, 26),
                (129, 'Ouro.', true, 26),
                (130, 'Manganês.', false, 26),

                (131, 'Michelangelo.', true, 27),
                (132, 'Leonardo da Vinci.', false, 27),
                (133, 'Rafael.', false, 27),
                (134, 'Donatello.', false, 27),
                (135, 'Botticelli.', false, 27),

                (136, 'Elevador Lacerda.', false, 28),
                (137, 'Cristo Redentor.', true, 28),
                (138, 'Estação da Luz.', false, 28),
                (139, 'One Tower.', false, 28),
                (140, 'Palácio da Alvorada.', false, 28),

                (141, '1891, Deodoro da Fonseca.', true, 29),
                (142, '1890, Floriano Peixoto.', false, 29),
                (143, '1889, Hermes da Fonseca.', false, 29),
                (144, '1930, Getúlio Vargas.', false, 29),
                (145, '1822, Deodoro da Fonseca.', false, 29),

                (146, 'Portugal.', false, 30),
                (147, 'Rússia.', false, 30),
                (148, 'Brasil.', false, 30),
                (149, 'Ucrânia.', true, 30),
                (150, 'França.', false, 30)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM tb_answers WHERE id
            IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
              40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
              79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
              118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150)`,
    );
  }
}
