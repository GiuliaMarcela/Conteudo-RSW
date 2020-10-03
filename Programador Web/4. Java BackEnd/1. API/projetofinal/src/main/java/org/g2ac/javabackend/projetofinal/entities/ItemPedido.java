package org.g2ac.javabackend.projetofinal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ItemPedido")
public class ItemPedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer ItemPedidoID;
	
	@NotNull
	@Min(message = "Deve ser maior ou igual a 1", value = 1)
	@Column(name = "Quantidade", nullable = false)
	private Integer quantidade; 
	
	@Valid
	@ManyToOne
	@JoinColumn(name = "fkProdutoID", nullable = false, referencedColumnName = "produtoID")
	private Produto fkProdutoID;

	public Integer getIdentificador() {
		return ItemPedidoID;
	}

	public void setIdentificador(Integer identificador) {
		ItemPedidoID = identificador;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Produto getFkProdutoID() {
		return fkProdutoID;
	}

	public void setFkProdutoID(Produto fkProdutoID) {
		this.fkProdutoID = fkProdutoID;
	} 
}
