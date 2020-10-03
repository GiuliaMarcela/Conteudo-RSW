package org.g2ac.javabackend.projetofinal.services;

import java.util.List;
import java.util.Optional;

import org.g2ac.javabackend.projetofinal.entities.Produto;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.repositories.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepositorio pdRepositorio; 
	
	public Produto procuraID(Integer id) throws ObjectNotFoundException {
		Optional<Produto> pOp = pdRepositorio.findById(id);
		if(pOp.isPresent()) {
			return pOp.get();
		}
		throw new ObjectNotFoundException(id);
	}
	
	public List<Produto> buscarTodos() {
		return pdRepositorio.findAll();
	}
	
	public Produto buscarPorID(Integer id) throws ObjectNotFoundException {
		return procuraID(id);
	}
	
	@Transactional
	public Produto adicionar(Produto corpo) {
		return pdRepositorio.save(corpo);
	}
	
	public void deletar(Integer id) throws ObjectNotFoundException {
		Produto achou = procuraID(id);
		pdRepositorio.delete(achou);
	}
	
	@Transactional
	public Produto atualizar(Integer id, Produto novo) throws ObjectNotFoundException {
		Produto achou = procuraID(id);
		achou.setValorUnidade(novo.getValorUnidade());
		achou.setEstoque(novo.getEstoque());
		achou.setNome(novo.getNome());
		achou.setDescricao(novo.getDescricao());
		achou.setFabricacao(novo.getFabricacao());
		return pdRepositorio.save(achou);
	}
}

