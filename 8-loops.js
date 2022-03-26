console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const destino = "Salvador";

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada

let destinoExiste = false;

for (let cont = 0; cont < listaDeDestinos.length ; cont ++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    }
}

if (destinoExiste) {
    console.log("O destino existe");
} else {
    console.log("O destino não existe");
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else {
    console.log("Desculpe, tivemos um erro!");
}