let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

/**
 * It sorts the books by price and then displays them
 */
function ordenarLivrosPorPreco() {

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    exibirOsLivros(livrosOrdenados);
}