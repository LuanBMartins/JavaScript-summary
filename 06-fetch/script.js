



fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => {
        return response.json()
    })
    .then(json => {
        document.querySelector("#app").innerHTML = json[0].nome
        console.log(json);
    })

const data = {
  id: Math.random() + "andrerafa",
  nome: "Andre",
  email: "carlosbm@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
}

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
})