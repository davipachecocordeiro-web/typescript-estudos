import { fill } from "../atividades/atv5";

/*
Utilize a função fill e preencha uma lista com 100 valores, sendo o máximo
valor possível 500.

Depois dessa lista ser preenchida, procure dentro da lista o maior número,
o menor número, e a média aritmética de todos os valores.

Mostre esse valores no terminar.
*/

const lista: number[] = []
fill(lista, 100, 500); 

let max: number | undefined = undefined
let min: number | undefined = undefined
let media: number = 0

/*for(const v of lista) {
    if(!max) {
        max = v
    }

    if(!min) {
        min = v
    }

    if(v > max){
        max = v
    }

    if(v < min){
        min = v
    }

    media += v
}
*/

for (let i = 0; i < lista.length; i++) {
    const v = lista[i] // v = 143

    if (!max) {
        max = v
    } else if (v > max) {
        max = v
    }

    if (!min) {
        min = v
    } else if (v < min) {
        min = v
    }

    media += v //media = 530
}

console.log(`Mneor: ${min}`)
console.log(`Maior: ${max}`)
console.log(`Média: ${media/100}`) //176.66666...
console.log(lista)