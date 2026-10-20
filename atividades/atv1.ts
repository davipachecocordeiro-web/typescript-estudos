type ValorSN = string | number 

const valor = 10
let valor2: ValorSN = 10

valor2 = ""

const valor3: any = true

const lista: any[] = ["abroba", 200, false, [], {}]
const lista2: Array<any> = ["abroba", 200, false, [], {}]

const lista3: number[] = []

lista3.push(10)
//lista3.push("agua") 
//lista3.push("10") 
lista3.push(10)

console.log(lista3)

const lista4: ValorSN[] = []

lista4.push(10)
lista4.push("agua")
//lista4.push(true)