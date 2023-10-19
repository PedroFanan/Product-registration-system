package br.com.api.produtos.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity // Esta classe é uma entidade persistente mapeada para uma tabela de banco de dados
@Table(name = "produtos") // A tabela associada a esta entidade se chama "produtos"
@Getter
@Setter
public class ProdutoModelo {
    
    @Id // Esta propriedade representa a chave primária da tabela
    @GeneratedValue(strategy = GenerationType.IDENTITY) // A estratégia de geração de valor é de identidade (autoincremento)
    private Long codigo; // Representa o código único do produto na tabela
    private String nome; // Representa o nome do produto na tabela
    private String marca; // Representa a marca do produto na tabela
}
