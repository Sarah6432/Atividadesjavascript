let i = 0;
const entradas = [5.5];

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto) {
   console.log(texto);
}

module.exports = {gets, print};