function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            {/* Campo de entrada para o nome do produto */}
            <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome' className='form-control'/>

            {/* Campo de entrada para a marca do produto */}
            <input type='text' value={obj.marca} onChange={eventoTeclado} name ='marca' placeholder='Marca' className='form-control'/>

            {/* Renderização condicional com base no valor de 'botao' */}
            {
                botao
                ? // Se 'botao' for verdadeiro (indicando que é um novo cadastro)
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn-primary'/>
                : // Caso contrário (indicando que é uma edição)
                <div>
                    <input type='button' value='Alterar' onClick={alterar} className='btn-warning'/>
                    <input type='button' value='Remover' onClick={remover} className='btn-danger'/>
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn-secondary'/>
                </div>
            }
        </form>
    )
}

export default Formulario;
