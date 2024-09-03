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
*/

const { gets, print } = require('./funcoesauxiliares-ex4');

const salario = gets();

const beneficios = gets();

let desconto;

let total;

if (salario >= 0 && salario <= 1100.00) {
    desconto = salario - (salario * 0.05)
    total = desconto + beneficios
    print('O salário depois dos descontos, mais os benefícios é ' + total);
} else if (salario >= 1100.01 && salario <= 2500.00) {
    desconto = salario - (salario * 0.10)
    total = desconto + beneficios
    print('O salário depois dos descontos, mais os benefícios é ' + total);
}else if (salario > 2500.00) {
    desconto = salario - (salario * 0.15)
    total = desconto + beneficios
    print('O salário depois dos descontos, mais os benefícios é ' + total);
}