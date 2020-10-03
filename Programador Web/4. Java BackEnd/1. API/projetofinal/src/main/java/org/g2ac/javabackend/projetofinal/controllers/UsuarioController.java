package org.g2ac.javabackend.projetofinal.controllers;

import java.util.List;

import javax.validation.Valid;

import org.g2ac.javabackend.projetofinal.entities.Usuario;
import org.g2ac.javabackend.projetofinal.exceptions.DeleteException;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService uService;
	
	@GetMapping
	public List<Usuario> home()	{
		return uService.buscaTodos();
	}
	
	@GetMapping("/{id}")
	public Usuario especificoID(@PathVariable Integer id) throws ObjectNotFoundException {
		return uService.buscaPorID(id);
	}
	
	@PostMapping
	public Usuario add(@Valid @RequestBody Usuario corpo) {
		return uService.adicionar(corpo);
	}
	
	@PutMapping("/{id}")
	public Usuario update(@PathVariable Integer id, @Valid @RequestBody Usuario novo) throws ObjectNotFoundException {
		return uService.atualizar(id, novo);
	}
	
	@DeleteMapping("/{id}")
	public Usuario delete(@PathVariable Integer id) throws ObjectNotFoundException, DeleteException {
		return uService.deletar(id);
	}
}
