package org.g2ac.javabackend.projetofinal.repositories;

import org.g2ac.javabackend.projetofinal.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Integer>{

}
