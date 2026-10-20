/*
Crie um tipo chamado StringNumber esse tipo deve possibilitar
o valor ser uma string ou um number.

Crie 3 variáveis com esse tipo e insira dentro delas 
os seguintes valores:
"texto"
"501"
501
*/

type StringNumber = string | number

const valor1: StringNumber = "texto"
const valor2: StringNumber = "501"
const valor3: StringNumber = 501

