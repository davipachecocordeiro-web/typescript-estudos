import ContaBancaria from "./ContaBancaria"

const cb = new ContaBancaria("000.000.007-99", "example@example.com", "David Barboza Longitude", "", 1)
const cb1 = new ContaBancaria("808.760.009-31", "osvalodocz@example.com", "Osvaldinho da Cruz Pereira", "abuuuuuuuu", 2)

//const cb = new ContaBancaria("000.000.005-33", "exa@example.com", "David Barboza Linguini", "", 1)
//console.log(cb.getCPF())
//console.log(cb.getEmail())
//console.log(cb.getNome())
//let tempDin = cb.getDinheiro()
//tempDin = 10_000_000_000_000
//console.log(cb)

cb.depositar(1000)
cb1.depositar(20000)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())

cb1.transferir(cb, 400)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())