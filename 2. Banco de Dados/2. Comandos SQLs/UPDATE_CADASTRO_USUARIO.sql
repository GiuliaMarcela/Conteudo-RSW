--Update dados usuario. Alterando tabelas usuario, endereco e contato

update usuario 
   set cpf = '12332145689', email = 'camilla.ferreira@hotmail.com'
 where id_usuario = 5;

update endereco 
   set rua = 'Rua Presidente Sodré', numero = '500', cep = '25645025'
 where id_endereco = 5;

update contato 
   set fixo = '22336598', movel = '988653502'
 where id_usuario = 5;

