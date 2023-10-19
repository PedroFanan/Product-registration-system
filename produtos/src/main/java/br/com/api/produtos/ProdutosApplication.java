package br.com.api.produtos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Esta anotação marca a classe como a classe de aplicação Spring Boot
public class ProdutosApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProdutosApplication.class, args); // Inicializa a aplicação Spring Boot
    }
}
