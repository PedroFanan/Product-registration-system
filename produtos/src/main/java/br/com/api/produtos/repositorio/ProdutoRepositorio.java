package br.com.api.produtos.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.api.produtos.modelo.ProdutoModelo;

@Repository // Indica que esta é uma classe de repositório gerenciada pelo Spring Framework
public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {
    // Esta é uma interface que estende CrudRepository para realizar operações de CRUD
    // O primeiro tipo genérico, ProdutoModelo, representa a entidade mapeada (classe de modelo)
    // O segundo tipo genérico, Long, representa o tipo da chave primária da entidade
}
