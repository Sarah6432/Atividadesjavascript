let i = 0;
const entradas = [2000, 250];

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto) {
   console.log(texto);
}

module.exports = {gets, print};