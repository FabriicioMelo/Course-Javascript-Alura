console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 1;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Compra bem sucedida!");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Comprador não é maior de idade e não pode comprar");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada || estaAcompanhada && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);