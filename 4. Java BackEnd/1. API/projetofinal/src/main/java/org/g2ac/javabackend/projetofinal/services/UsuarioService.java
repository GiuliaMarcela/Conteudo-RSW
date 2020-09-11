package org.g2ac.javabackend.projetofinal.services;

import java.util.List;
import java.util.Optional;

import org.g2ac.javabackend.projetofinal.entities.Usuario;
import org.g2ac.javabackend.projetofinal.exceptions.DeleteException;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.g2ac.javabackend.projetofinal.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepositorio uRepositorio;

	public Usuario procuraID(Integer id) throws ObjectNotFoundException {
		Optional<Usuario> uOptional = uRepositorio.findById(id);
		if (uOptional.isPresent()) {
			return uOptional.get();
		}
		throw new ObjectNotFoundException(id);
	}

	public List<Usuario> buscaTodos() {
		return uRepositorio.findAll();
	}

	public Usuario buscaPorID(Integer id) throws ObjectNotFoundException {
		return procuraID(id);
	}

	@Transactional
	public Usuario adicionar(Usuario corpo) {
		return uRepositorio.save(corpo);
	}

	public Usuario deletar(Integer id) throws ObjectNotFoundException, DeleteException {
		try {
			Usuario encontrou = procuraID(id);
			uRepositorio.delete(encontrou);
			return encontrou;
		} catch (DataIntegrityViolationException e) {
			throw new DeleteException(id);
		}
	}

	@Transactional
	public Usuario atualizar(Integer id, Usuario novo) throws ObjectNotFoundException {
		Usuario encontrou = procuraID(id);
		encontrou.setNome(novo.getNome());
		encontrou.setCpf(novo.getCpf());
		encontrou.setEmail(novo.getEmail());
		encontrou.setNickname(novo.getNickname());
		encontrou.setDataNascimento(novo.getDataNascimento());
		encontrou.getFkEndereco().setRua(novo.getFkEndereco().getRua());
		encontrou.getFkEndereco().setNumero(novo.getFkEndereco().getNumero());
		encontrou.getFkEndereco().setBairro(novo.getFkEndereco().getBairro());
		encontrou.getFkEndereco().setCidade(novo.getFkEndereco().getCidade());
		encontrou.getFkEndereco().setEstado(novo.getFkEndereco().getEstado());
		encontrou.getFkEndereco().setCep(novo.getFkEndereco().getCep());
		encontrou.getContatoObj().setDdd(novo.getContatoObj().getDdd());
		encontrou.getContatoObj().setCelular(novo.getContatoObj().getCelular());
		encontrou.getContatoObj().setFixo(novo.getContatoObj().getFixo());
		return uRepositorio.save(encontrou);
	}
}
