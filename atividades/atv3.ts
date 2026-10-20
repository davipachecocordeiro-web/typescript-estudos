type Email = `${string}@${string}.${"com"| "me" | "com.br" | "us"}`


type User = {
    id: number,
    nome: string,
    email: Email,
    senha: string
}

const user1:User = { 
    id: 1,
    nome: "Davi Pacheco",
    email: "example@example.com",
    senha: "123"
}