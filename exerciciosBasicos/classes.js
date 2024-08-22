class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    // constructor - o que acontece auando uma pessoa é instanciada
    constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
      this.anoDeNascimento = 2024 - idade;
    }//sempre que uma nova pessoa é instanciada ela passa pelo constructor
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }// quando for declarar um método não precisa colocar a palavra function
}// deve definir como são para que possam ser instanciadas, classe - é a definição do que deveria ser
// instancia é uma ocorrência de uma classe 

//funções recebendo objetos
function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
         console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}
const Sarah = new Pessoa("sarah", 19);
const Maria = new Pessoa("maria", 23);

 compararPessoa(Sarah, Maria);

//classe - é uma definição do objeto 
//instancia é uma ocorrencia do objeto