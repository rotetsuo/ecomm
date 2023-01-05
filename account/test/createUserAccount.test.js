
import {createUserCase, accounts} from "../src/use-case/createUserAccount.js";
const usuarioTeste = createUserCase("Roberto", "roberto@email.com", "123")

console.log(usuarioTeste)