/*2-crie uma classe para representar pessoas.
Para cada pessoa teremos atributos, nome, peso e altura.
As pessoas devem ter capacidade de dizer o valor do seu IMC(IMC = peso/ (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça para josé dizer o valor do seu imc;
*/
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    meuImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        let imc = this.meuImc();

        if (imc < 18.5) {
            return (`${this.nome} está abaixo do peso normal, seu imc é ` + imc);
        } else if (imc >= 18.5 && imc < 25) {
            return (`${this.nome} está com peso está normal, seu imc é ` + imc);
        } else if (25 >= imc && imc < 30) {
            return (`${this.nome} está com obesidade grau 1, seu imc é ` + imc);
        } else if (imc >= 30 && imc < 40) {
            return (`${this.nome} está com obesidade grau 2, seu imc é ` + imc);
        } else {
            return (`${this.nome} está com obesidade grave` + imc);
        }
    }

}

let pessoa = new Pessoa("josé", 70, 1.75);

let pessoa1 = new Pessoa("Maria", 50, 1.55);

let pessoa2 = new  Pessoa("julio", 100, 1.75)

console.log(pessoa.classificarImc());

console.log(pessoa1.classificarImc());

console.log(pessoa2.classificarImc());
