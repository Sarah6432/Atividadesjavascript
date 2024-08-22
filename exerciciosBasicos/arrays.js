const notas = [];//lista


notas.push(10);
notas.push(10);
notas.push(5);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}//percorre as listas

const media = soma / notas.length;
console.log(media);