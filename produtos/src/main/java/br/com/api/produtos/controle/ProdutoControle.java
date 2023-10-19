package br.com.api.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.servico.ProdutoServico;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle {

    @Autowired
    private ProdutoServico ps;

    // Mapeamento para lidar com a remoção de um produto com base em seu código
    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
        return ps.remover(codigo);
    }

    // Mapeamento para lidar com a alteração de um produto
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "alterar" );
    }

    // Mapeamento para lidar com o cadastro de um novo produto
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "cadastrar" );
    }

    // Mapeamento para listar todos os produtos
    @GetMapping("/Listar")
    public Iterable<ProdutoModelo> listar(){
        return ps.listar();
    }

    // Rota raiz para verificar se a API de produtos está funcionando
    @GetMapping("C:\\Users\\Pedro\\OneDrive\\Área de Trabalho\\Pedro\\CLIENTES\\TRABALHOS DE CLIENTES FACULDADE\\PROJETO FACULDADE")
    public String rota(){
        return "API de produtos funcionando!";
    }
}
