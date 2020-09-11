package org.g2ac.javabackend.projetofinal.exceptions;

public class DeleteException extends Exception{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	
	public DeleteException(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	} 
}
