//importação de arquivos 
//gets - pega  a leitura como se fosse alguém digitando 
//prints - funciona como um console log
//mocado - simulação 

let i = 0;
const entradas = [ 5, 50, 10, 98, 23, 200];

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto) {
   console.log(texto);
}

module.exports = {gets, print};// exportação do arquivo 