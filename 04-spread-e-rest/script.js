function showList(empresa, ...clientes) {
    console.log(empresa);
    console.log(clientes);
}

showList("Luan", "carlos", "barnabé")


const numeros = [1, 2, 5, 7, 3]

console.log(Math.max(...numeros));

const itens = document.querySelectorAll("li")
console.log(itens);

[...itens].map(item => console.log(item))

const carro = {cor: 'azul', portas: 4, ano: 2020}

const cloneCarro = {...carro, turbo: true}