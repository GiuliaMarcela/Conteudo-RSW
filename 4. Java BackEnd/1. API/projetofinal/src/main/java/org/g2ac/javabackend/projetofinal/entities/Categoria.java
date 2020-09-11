package org.g2ac.javabackend.projetofinal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoriaID; 
	
	@NotNull
	@Size(min = 5, max = 30)
	@Column(name = "Nome", nullable = false, length = 30)
	private String nome; 
	
	@Column(name = "Descricao", nullable = true, length = 150)
	private String descricao;
	
	public Integer getIdentificador() {
		return categoriaID;
	}
	public void setIdentificador(Integer identificador) {
		this.categoriaID = identificador;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	} 
}
