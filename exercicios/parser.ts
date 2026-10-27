class ToTextParser {
    constructor() {

    }

}


















class User extends ToTextParser {
    constructor(
        private id: number,
        private nome: string,
        private email: string,
        private senha: string
    )
}


const texto = "Davi Pacheco Cordeiro"
const final = texto.split("").map(v => {
    if("aeiou".includes(v.toLowerCase())) {
        return v.toUpperCase()
    } else {
        return v.toLowerCase()
    }
}).join("")

console.log(final)

const u1 = new User(0, "Hugo", "hugo@example.com", "123")
const u2 = new User(1, "Jonathan", "jonathan@example.com", "123")

console.log(u1.toText())
console.log(u2.toText())

console.log(u1.toCSV())
console.log(u2.toCSV())