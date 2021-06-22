async function fetchProdutos(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}
  
const requisicao = fetchProdutos(
    "https://ranekapi.origamid.dev/json/api/produto"
)

requisicao.then(res => console.log(res))
