			create table ENDERECO(
	  ID_ENDERECO SERIAL primary key not null,
 		 RUA VARCHAR(40) not null,	
	  NUMERO VARCHAR(15) not null,
	  BAIRRO VARCHAR(30) not null,
	  CIDADE VARCHAR(40) not null,
		  ESTADO CHAR(2) not null,
		 	 CEP CHAR(8) not null);

			create table USUARIO(
			  ID_USUARIO SERIAL primary key not null,
			        NOME VARCHAR not null,
					 CPF CHAR(11) unique not null,
				   EMAIL VARCHAR unique not null,
			NOME_USUARIO VARCHAR(15) unique not null,
		 DATA_NASCIMENTO DATE not null,
		     ID_ENDERECO INTEGER not null,
foreign key(ID_ENDERECO) references ENDERECO);

			create table CONTATO(
			  ID_CONTATO SERIAL primary key not null,
					 DDD CHAR(2) not null,
					FIXO CHAR(8) UNIQUE,
				   MOVEL CHAR(9) UNIQUE,
			  ID_USUARIO INTEGER not null,
 foreign key(ID_USUARIO) references USUARIO);

			create table CATEGORIA(
			ID_CATEGORIA SERIAL primary key not null,
			 		NOME VARCHAR(30) not null,
			   DESCRICAO VARCHAR(150));

				create table PRODUTO(
			  	  ID_PRODUTO SERIAL primary key not null,
			 DATA_FABRICACAO DATE not null,
			   VALOR_UNIDADE REAL not null,
		  QUANTIDADE_ESTOQUE INTEGER not null,
				   DESCRICAO VARCHAR(150),
			  	        NOME VARCHAR(30) not null,
				  ID_USUARIO INTEGER not null,
				ID_CATEGORIA INTEGER not null,
	 foreign key(ID_USUARIO) references USUARIO,
   foreign key(ID_CATEGORIA) references CATEGORIA);

			  create table PEDIDO(
			     ID_PEDIDO SERIAL primary key not null,
			DATA_REALIZADO TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP not null,
			    ID_USUARIO INTEGER not null,
   foreign key(ID_USUARIO) references USUARIO);

		   create table ITEM_PEDIDO(
		 ID_ITEM_PEDIDO SERIAL primary key not null,
		QUANTIDADE_ITEM INTEGER not null,
			 ID_PRODUTO INTEGER not null,
			  ID_PEDIDO INTEGER not null,
foreign key(ID_PRODUTO) references PRODUTO,
 foreign key(ID_PEDIDO) references PEDIDO);
