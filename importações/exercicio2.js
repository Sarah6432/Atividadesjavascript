/* 1) Faça um programa que receba a média de um aluno 
 Caso a media seja < 5 imprima "Reprovado"
 Caso a media seja >= 5 e < 7 "Recuperação"
 Caso a media seja >= 7 imprima "Aprovado"
 
 ex de entrada: 5.5

*/
const { gets, print } = require('./funcoesauxiliares-ex2');

const media = gets();


if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if (media >= 7) {
    print('Aprovado');
} else {
    print('Dado inválido');
}

