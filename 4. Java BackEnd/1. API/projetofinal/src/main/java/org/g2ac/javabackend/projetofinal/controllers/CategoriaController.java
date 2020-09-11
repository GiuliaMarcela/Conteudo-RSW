package org.g2ac.javabackend.projetofinal.controllers;

import java.util.List;

import javax.validation.Valid;

import org.g2ac.javabackend.projetofinal.entities.Categoria;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.services.CategoriaService;
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
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaService caService;
	
	@GetMapping
	public List<Categoria> home(){
		return caService.buscarTodos();
	}
	
	@GetMapping("/{id}")
	public Categoria especificoID(@PathVariable Integer id) throws ObjectNotFoundException {
		return caService.buscarPorID(id);
	}
	
	@PostMapping
	public Categoria add(@Valid @RequestBody Categoria corpo) {
		return caService.adicionar(corpo);
	}
	
	@PutMapping("/{id}")
	public Categoria update(@PathVariable Integer id, @Valid @RequestBody Categoria novo) throws ObjectNotFoundException {
		return caService.atualizar(id, novo);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) throws ObjectNotFoundException {
		caService.deletar(id);
	}
}
