package org.g2ac.javabackend.projetofinal.services;

import java.util.List;
import java.util.Optional;

import org.g2ac.javabackend.projetofinal.entities.Categoria;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.repositories.CategoriaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepositorio caRepositorio;
	
	public Categoria procuraID(Integer id) throws ObjectNotFoundException {
		Optional<Categoria> caOp = caRepositorio.findById(id);
		if(caOp.isPresent()) {
			return caOp.get();
		}
		throw new ObjectNotFoundException(id);
	}
	
	public List<Categoria> buscarTodos(){
		return caRepositorio.findAll();
	}
	
	public Categoria buscarPorID(Integer id) throws ObjectNotFoundException {
		return procuraID(id);
	}
	
	@Transactional
	public Categoria adicionar(Categoria corpo) {
		return caRepositorio.save(corpo);
	}
	
	public void deletar(Integer id) throws ObjectNotFoundException {
		Categoria achou = procuraID(id);
		caRepositorio.delete(achou);
	}
	
	@Transactional
	public Categoria atualizar(Integer id, Categoria novo) throws ObjectNotFoundException {
		Categoria achou = procuraID(id);
		achou.setNome(novo.getNome());
		achou.setDescricao(novo.getDescricao());
		return caRepositorio.save(achou);
	}
}
