/*2-crie uma classe para representar pessoas.
Para cada pessoa teremos atributos, nome, peso e altura.
As pessoas devem ter capacidade de dizer o valor do seu IMC(IMC = peso/ (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça para josé dizer o valor do seu imc;
*/
class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    meuImc() {
        let imc = this.peso / (this.altura * this.altura);
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.altura} e peso ${this.peso} quilos, meu imc é ` + imc);
    }

}

let pessoa = new Pessoa("josé", 70, 1.75);
let pessoa1 = new Pessoa("Maria", 50, 1.55);

pessoa.meuImc();
pessoa1.meuImc();