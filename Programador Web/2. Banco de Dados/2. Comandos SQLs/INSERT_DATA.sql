--insert dados de cadastro

insert into endereco (rua, numero, bairro, cidade, estado, cep) 
	 values ('Ladeira Elisa Reuther da Silva', '65', 'Mosela', 'Petrópolis', 'RJ', '25675171'),
			('Sergipe', '95', 'Quitandinha', 'Petrópolis', 'RJ', '25650490'),
			('Vila Nicolau Antonio Mayworm', '36', 'Mosela', 'Petrópolis', 'RJ', '25675311'),
			('Travessa José Lafaiete', '469', 'Mosela', 'Petrópolis', 'RJ', '25675155'),
			('Siméria', '99', 'Siméria', 'Petrópolis', 'RJ', '25600000');

insert into usuario (nome, CPF, email, nome_usuario, data_nascimento, id_endereco) 
	 values ('Abner Joia', '13129182764', 'abnerjoia1991@gmail.com', 'AbJoia', '1991-02-08', 1),
			('Alessandro Felix', '65129415568', 'alessandro.felix.1973@gmail.com', 'Felix', '1973-06-01', 2),
			('Cainã Machado', '80440771793', 'cwaxtd@gmail.com', 'Cwax', '2002-01-21', 3),
			('Giulia Mendes', '16946186761', 'giuliamendes67@gmail.com', 'GiuliaMarcela', '1998-11-20', 4),
			('Camila Ferreira Costa Silva', '00000000000', 'camilaferreira@gmail.com', 'CamilaFerreira', '1990-08-06', 5);

insert into contato (ddd, fixo, movel, id_usuario) 
	 values ('24', null, '981573502', 1),
			('24', '22358317', '992761939', 2),
			('24', null, '988319994', 3),
			('24', null, '988317240', 4),
			('24', null, '000000000', 5);

insert into categoria (nome, descricao) 
	 values ('Tecnologia', 'Informática, kindle'),
			('Vestuário', 'Roupas, Sapatos e Acessórios'),
			('Música','Instrumentos Musicais, CDs e Equipamentos de Estúdio'),
			('Livraria','Ebook, Livros e Revistas'),
			('Automóvel', 'Carros e Motos'),
			('Pet', 'Acessórios, Artigos de Pet Shop e Animais Domésticos');

insert into produto (data_fabricacao, nome, descricao, quantidade_estoque, valor_unidade, id_usuario, id_categoria) 
	 values ('2017/02/20', 'Smartphone Galaxy A30', 'Aparelho em ótimo estado, com 2 meses de uso', '1', 800.00, 4, 1),
			('2020/07/23', 'Jaqueta de Couro', 'Produto novo, 100% pele animal', '100', 600.00, 2, 2),
			('1959/08/20', 'Guitarra Gibson Les Paul', 'Edição Jimmy Page 1959', '1', 30000.00, 1, 3),
			('1943/04/18', 'Livro: O Pequeno Príncipe', 'Novo, sem marcas de uso', '20', 30.00, 4, 4),
			('1971/11/02', 'Fusca 71', 'Cor laranja, em bom estado de conservação. Aceito moto de entrada', '1', 12990.00, 3, 5),
			('2020/06/23', 'Cachorro', 'Completo com 4 patas, pedigree Golden, caramelo', '5', 2500.00, 5, 6);

--insert dados venda "Para tabelas pedido, item_pedido e atualização da tabela produto"

--data do pedido na tabela pedido é inserida pela função TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
insert into pedido (id_usuario) 
values (1);
insert into item_pedido (quantidade_item , id_produto , id_pedido)
values (2, 4, 1);
update produto 
   set quantidade_estoque = quantidade_estoque - 2
 where id_produto = 4;

insert into pedido (id_usuario)
values (1);
insert into item_pedido (quantidade_item , id_produto , id_pedido)
values (10, 2, 2);
update produto 
   set quantidade_estoque = quantidade_estoque - 10
 where id_produto = 2;

insert into pedido (id_usuario)
values (3);
insert into item_pedido (quantidade_item , id_produto , id_pedido)
values (1, 6, 3);
update produto 
   set quantidade_estoque = quantidade_estoque - 1
 where id_produto = 6;

insert into pedido (id_usuario)
values (5);
insert into item_pedido (quantidade_item , id_produto , id_pedido)
values (1, 1, 4);
update produto 
   set quantidade_estoque = quantidade_estoque - 1
 where id_produto = 1;

insert into pedido (id_usuario)
values (4);
insert into item_pedido (quantidade_item , id_produto , id_pedido)
values (3, 6, 5);
update produto 
   set quantidade_estoque = quantidade_estoque - 3
 where id_produto = 6;


