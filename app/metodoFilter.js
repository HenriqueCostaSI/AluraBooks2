const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));


/**
 * If the value of the button is 'disponivel', then filter the array of books to only include books
 * where the quantity is greater than 0, otherwise filter the array of books to only include books
 * where the category is equal to the value of the button.
 * @param tipo - the type of filter to be applied
 */
function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponiveis' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);

    console.log(categoria);
    console.log(livrosFiltrados);

    exibirOsLivros(livrosFiltrados);

    if(categoria == 'disponiveis') {
        exibirValorTotalDosLivrosDisponiveisNaTela(livrosFiltrados);
    }
}


function exibirValorTotalDosLivrosDisponiveisNaTela(livrosDisponiveis) {

    const precoTotal = livrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);

    elementoValorTotalDeLivrosDisponiveis.innerHTML = `
    
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
    </div>


    `;

}