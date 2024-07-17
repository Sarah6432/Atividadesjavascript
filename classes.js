class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }// quando for declarar um método não precisa colocar a palavra function
}// deve definir como são para que possam ser instanciadas, classe - é a definição do que deveria ser
// instancia é uma ocorrência de uma classe 
const Sarah = new Pessoa();
Sarah.nome = "Sarah Lima";
Sarah.idade = 19;

const Maria = new Pessoa();
Maria.nome = "Maria Santos";
Maria.idade = 23;

console.log(Sarah)
console.log(Sarah.descrever)
console.log(Maria)
console.log(Maria.descrever)

//classe - é uma definição do objeto 
//instancia é uma ocorrencia do objeto