let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();



/**
 * The function getBuscarLivrosDaAPI() is an asynchronous function that fetches the data from the API,
 * then it converts the data into JSON format, then it applies the discount to the data, and finally it
 * displays the data on the page.
 */
async function getBuscarLivrosDaAPI() {

    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivros(livrosComDesconto);

}

