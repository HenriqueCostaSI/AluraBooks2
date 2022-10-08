const elementoParaInserirLivros = document.getElementById('livros');
const elementoValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

/**
 * It takes an array of objects and creates a div for each object, inserting the object's properties
 * into the div.
 * @param listaDeLivros - is the array of objects that I'm using to display the books.
 */
function exibirOsLivros(listaDeLivros) {

    elementoValorTotalDeLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML = '';

    listaDeLivros.forEach( livro => {

       // let disponibilidadeLivros = verificarDisponibilidadeLivros(livro);
        let disponibilidadeLivros = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidadeLivros}" src="${livro.imagem}" alt="${livro.alt}" /> 
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
        </div>

        `
    })


}
/*
function verificarDisponibilidadeLivros(livro) {

    if(livro.quantidade > 0 ){
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }



}
*/