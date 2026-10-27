import Validador from "./Validador";
import ContaBancaria from "./ContaBancaria"

const cb1 = new ContaBancaria("Davi", "111.222.333-44", "Rogerio@example.com")
const cb2 = new ContaBancaria("Joao", "555.666.777-88", "rambo@example.com")
const cb3 = new ContaBancaria("Vinicio", "999.000.111-55", "Vinicio@example.com")

const log = console.log
log(cb1)
log(cb2)
log(cb3)
Validador.validarCPF("000.111.222-33")

cb1.setCPF("111.222.333-99").setEmail("example@example.com")
log(cb1)