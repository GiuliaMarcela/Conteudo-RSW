package org.g2ac.javabackend.projetofinal.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.g2ac.javabackend.projetofinal.entities.Pedido;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.repositories.PedidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepositorio pRepositorio; 
	
	public Pedido procuraID(Integer id) throws ObjectNotFoundException {
		Optional<Pedido> pOptional = pRepositorio.findById(id);
		if(pOptional.isPresent()) {
			return pOptional.get();
		}
		throw new ObjectNotFoundException(id);
	}
	
	public List<Pedido> buscarTodos(){
		return pRepositorio.findAll();
	}
	
	public Pedido buscarPorID(Integer id) throws ObjectNotFoundException {
		return procuraID(id);
	}
	
	@Transactional
	public Pedido adicionar(Pedido corpo) {
		corpo.setDataRealizada(new Date());
		return pRepositorio.save(corpo);
	}
	
	public void deletar(Integer id) throws ObjectNotFoundException {
		Pedido achou = procuraID(id);
		pRepositorio.delete(achou);
	}
	
	@Transactional
	public Pedido atualizar(Integer id, Pedido novo) throws ObjectNotFoundException {
		Pedido achou = procuraID(id);
		achou.setItemPedido(novo.getItemPedido());
		achou.setDataRealizada(new Date());
		return pRepositorio.save(achou);		
	}
}
