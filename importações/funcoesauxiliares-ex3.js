let i = 0;
const entradas = [ 5, 3, 1, 4, 10, 8 ];

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto) {
   console.log(texto);
}

module.exports = {gets, print};