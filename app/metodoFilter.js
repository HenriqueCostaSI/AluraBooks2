const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));


/**
 * If the value of the button is 'disponivel', then filter the array of books to only include books
 * where the quantity is greater than 0, otherwise filter the array of books to only include books
 * where the category is equal to the value of the button.
 * @param tipo - the type of filter to be applied
 */
function filtrarLivros(tipo) {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0)  :livros.filter(livro => livro.categoria == categoria);
    exibirOsLivros(livrosFiltrados);
}

