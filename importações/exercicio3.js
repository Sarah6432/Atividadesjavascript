/* 2) Faça um programa que receba N (quantidade de numeros) e seus 
respectivos valores e imprima o maior numero par e o menor numero impar.

ex de entrada: 5, 3, 4, 1, 10, 8

saida:
Maior numero par: 10
Menor numero impar: 1
*/
const { gets, print } = require('./funcoesauxiliares-ex3');

const valores = gets();

let maiorValorPar = null;
let menorValorImpar = null;

for (let i = 0; i < valores; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorValorPar === null || numero > maiorValorPar) {
            maiorValorPar = numero;
        }

    } else {
        if (menorValorImpar === null || numero < menorValorImpar) {
            menorValorImpar = numero;
        }
    }
}
print('O maior numero par é ' + maiorValorPar);
print('O menor numero impar é ' + menorValorImpar);

