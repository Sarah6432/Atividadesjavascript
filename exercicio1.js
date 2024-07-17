/*1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/
//atributo - variaveis dentro de uma classe
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {

        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    calcularGastoDeViagem(distanciaEmKm, precoCombustivel){
         return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro("fiat", "rosa", 1/12);
console.log(uno.calcularGastoDeViagem(70, 5))

const palio = new Carro("fiat", "verde", 1/10);
console.log(palio.calcularGastoDeViagem(70, 5))