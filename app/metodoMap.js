/**
 * It takes an array of objects, and returns a new array of objects with a new property added to each
 * object.
 * @param livros - an array of objects
 * @returns the array of objects with the new price.
 */
function aplicarDesconto(livros) {

    const desconto = 0.3;
    
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto;
}