package br.com.api.produtos.modelo;

import org.springframework.stereotype.Component;
import lombok.Getter;
import lombok.Setter;

@Component // Esta classe é um componente gerenciado pelo Spring Framework
@Getter
@Setter
public class RespostaModelo {
    private String mensagem; // Uma propriedade para armazenar mensagens de resposta
}
