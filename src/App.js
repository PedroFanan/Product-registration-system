import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  // Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  };

  // Use State
  const [btnCadastrar, setBtnCadastrar] = useState(true); // Estado para controlar se o botão de cadastrar está ativo ou não
  const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos
  const [objProduto, setObjProduto] = useState(produto); // Estado para armazenar o objeto de produto atual

  // UseEffect
  useEffect(() => {
    // Realiza uma solicitação HTTP para buscar a lista de produtos do servidor
    fetch("http://localhost:8080/Listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    // Atualiza o objeto de produto com os valores dos campos de entrada do formulário
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  // Remover produto
  const remover = () => {
    // Realiza uma solicitação HTTP para remover um produto do servidor
    // Remove o produto da lista de produtos no cliente e limpa o formulário
  }

  // Limpar formulário
  const limparFormulario = () => {
    // Limpa o formulário e reativa o botão de cadastro
  }

  // Selecionar produto
  const selecionarProduto = (indice) => {
    // Seleciona um produto da lista para edição
  }

  // Cadastrar produto
  const cadastrar = () => {
    // Realiza uma solicitação HTTP para cadastrar um novo produto no servidor
    // Atualiza a lista de produtos no cliente e limpa o formulário
  }

  // Alterar produto
  const alterar = () => {
    // Realiza uma solicitação HTTP para alterar um produto existente no servidor
    // Atualiza a lista de produtos no cliente e limpa o formulário
  }

  // Retorno
  return (
    <div>
      {/* Renderiza o formulário com botões e campos de entrada */}
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      {/* Renderiza a tabela que exibe a lista de produtos */}
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
