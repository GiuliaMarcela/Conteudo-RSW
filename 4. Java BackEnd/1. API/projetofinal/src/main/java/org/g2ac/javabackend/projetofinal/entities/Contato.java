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
@Table(name = "Contato")
public class Contato {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer contatoID;
	
	@NotNull
	@Size(min = 2, max = 2)
	@Column(name = "DDD", nullable = false, length = 2)
	private String ddd; 
	
	@Column(name = "Fixo", nullable = true, unique = true, length = 8)
	@Size(min = 8, max = 8)
	private String fixo; 
	
	@Column(name = "Movel", nullable = true, unique = true, length = 9)
	@Size(min = 9, max = 9)
	private String celular; 

	public Integer getIdentificador() {
		return contatoID;
	}

	public void setIdentificador(Integer identificador) {
		this.contatoID = identificador;
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getFixo() {
		return fixo;
	}

	public void setFixo(String fixo) {
		this.fixo = fixo;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}
}
