/*
Crie um tipo de um objeto Pessoa onde posssua as seguintes propriedades
com os seguintes tipos:

cpf - string
nome - string
altura - number
peso - number

depois disso, crie 2 objetos com o tipo pessoa e defina suas propriedades
*/

type pessoa = {
    cpf: string,
    nome: string,
    altura: number,
    peso: number
}

const Dom_Pedro: pessoa = {
    cpf: "222.222.333-55",
    nome: "Dom Pedro",
    altura: 1.60,
    peso: 60
}

const awebo: pessoa = {
    cpf: "022.222.111-55",
    nome: "awebo junior",
    altura: 0.44,
    peso: 40
}