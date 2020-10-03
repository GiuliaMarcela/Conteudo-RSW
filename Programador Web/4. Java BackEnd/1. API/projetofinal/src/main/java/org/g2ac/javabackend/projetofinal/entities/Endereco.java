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
@Table(name = "Endereco")
public class Endereco {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer enderecoID; 
	
	@NotNull(message = "Não pode ser nulo. Por favor, informe uma rua.")
	@Size(min = 5, max = 40) 
	@Column(name = "Rua", nullable = false, length = 40)
	private String rua; 
	
	@NotNull(message = "Não pode ser nulo. Por favor, informe um número.")
	@Size(min = 2, max = 15)
	@Column(name = "Numero", nullable = false, length = 15)
	private String numero; 
	
	@NotNull(message = "Não pode ser nulo. Por favor, informe um bairro.")
	@Size(min = 5, max = 30)
	@Column(name = "Bairro", nullable = false, length = 30)
	private String bairro; 
	
	@NotNull(message = "Não pode ser nulo. Por favor, informe uma cidade.")
	@Size(min = 5, max = 40)
	@Column(name = "Cidade", nullable = false, length = 40)
	private String cidade; 
	
	@NotNull(message = "Não pode ser nulo e deve conter 2 digitos.")
	@Size(min = 2, max = 2)
	@Column(name = "Estado", nullable = false, length = 2)
	private String estado;
	
	@NotNull(message = "Não pode ser nulo e deve conter 8 digitos.")
	@Size(min = 8, max = 8)
	@Column(name = "Cep", nullable = false, length = 8)
	private String cep;
	
	public Integer getIdentificador() {
		return enderecoID;
	}
	public void setIdentificador(Integer identificador) {
		this.enderecoID = identificador;
	}
	public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}	
}
