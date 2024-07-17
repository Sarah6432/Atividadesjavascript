const Pessoa = {
    nome: "Sarah Lima",
    idade: 19,

    //conseguimos usar funçoes em objetos e chamamos elas de métodos
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }//this - assume o objeto
};
// objeto - coleção de valores que funciona através de chave e valor
//coleção de dados
Pessoa.altura = 1.55;
// incrementada por fora, de modo dinâmico chamando o objeto

console.log(Pessoa.nome);
console.log(Pessoa.idade);
console.log(Pessoa)
Pessoa.descrever();

// Para acessar dinamicamente valores de um objeto :
const atributo = "idade";
console.log(Pessoa[atributo]);



