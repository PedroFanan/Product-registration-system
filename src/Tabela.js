function Tabela({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>         {/* Cabeçalho da coluna de índice */}
                    <th>Nome</th>      {/* Cabeçalho da coluna de nome */}
                    <th>Marca</th>     {/* Cabeçalho da coluna de marca */}
                    <th>Selecionar</th>{/* Cabeçalho da coluna de seleção */}
                </tr>
            </thead>

            <tbody>
                {
                    // Mapeia o vetor de produtos para renderizar as linhas da tabela
                    vetor.map((obj, indice) => (
                      <tr key={indice}>
                        <td>{indice+1}</td>                   {/* Exibe o índice da linha */}
                        <td>{obj.nome}</td>                   {/* Exibe o nome do produto */}
                        <td>{obj.marca}</td>                  {/* Exibe a marca do produto */}
                        <td>
                            <button onClick={() => {selecionar(indice)}} className="btn btn-success">
                                Selecionar
                            </button>  {/* Botão de seleção que chama a função 'selecionar' */}
                        </td>
                      </tr>  
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;
