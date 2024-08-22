const { gets, print } = require('./funcoesauxiliares');

const entradas = gets();


let maiorValorEncontrado = 0;

for (let i = 0; i < entradas; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

}

print(maiorValorEncontrado); 