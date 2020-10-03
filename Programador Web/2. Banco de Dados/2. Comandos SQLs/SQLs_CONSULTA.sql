-- Retorna relação produto categoria ordenando com order by

select p.nome as "Produto", c.nome as "Categoria"
  from produto p 
  join categoria c 
    on p.id_categoria = c.id_categoria
 order by (c);

-- Retorna relação de usuarios por localidade agrupado com group by

select e.bairro, count(u.id_usuario) as "Usuario por Localidade"
  from usuario u
  join endereco e 
    on u.id_endereco = e.id_endereco
 group by (e.bairro);

-- Retorna relação de usuarios e seus produtos anunciados com quantidade

	select p.quantidade_estoque as "Quantidade Estoque", 
		   p.nome as "Produto", u.nome as "Vendedor" 
	  from produto p
inner join usuario u 
		on p.id_usuario = u.id_usuario; 

-- Retorna quantidade de pedidos realizados pelo sistema

select COUNT(id_pedido ) as "Quantidade de pedidos gerados"
  from pedido;
 
-- SQL Nota Fiscal

	select pd.id_pedido as "Nº Pedido", p.nome as "Produto", p.valor_unidade as "Valor unitario",
	   	   ip.quantidade_item as "Quantidade", pd.data_realizado as "Data Emissão", u.nome as "Comprador(a)",
		   u.cpf, p.valor_unidade * ip.quantidade_item as "Total", v.nome as "Vendedor(a)"
	  from produto p
inner join usuario v
		on p.id_usuario = v.id_usuario 
inner join item_pedido ip
		on p.id_produto = ip.id_produto
inner join pedido pd
		on ip.id_pedido = pd.id_pedido 
inner join usuario u
		on pd.id_usuario = u.id_usuario 
 	 where pd.id_pedido = 2;


