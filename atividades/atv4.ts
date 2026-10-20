function listaNomes(nome: string, qntd: number): string[] {
    const nomes: string[] = []

    for(let i = 0; i < qntd; i++)
        nomes.push(nome)
    return nomes
}

type Fun = (texto:string, numero:number) => string []

const fun1:Fun = (texto:string, numero:number) => {
    const nomes: string[] = []

    for(let i = 0; i < numero; i++)
        nomes.push(texto)
    return nomes
}



const lista = listaNomes("Rigel", 100)
console.log(lista)