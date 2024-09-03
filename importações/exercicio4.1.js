/*
3) faça um programa que transfira o salário para um funcionário.
para realizar o calculo receba o valor adicional e benefícios, o salário deve ser transferido e calculado da seguinte maneira
- valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios.

Para calcular o percentual de imposto segue as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior que R$ 2.500.00 = 15.00%

entrada:
2000
250

saída: 
2050.00

- com funções agora!
*/

const { gets, print } = require('./funcoesauxiliares-ex4');

const valorSalario = gets();

const Beneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100.00) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500.00) {
        return 10;
    } else {
        return 15;
    }

}

const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorTransferir = valorSalario - valorImposto + Beneficios;

print('O valor a transferir é ' + valorTransferir);