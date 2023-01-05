export const accounts = []

export function createUserCase(nome, email, senha){
    
    const d = new Date().toISOString().substring(0,10)
    const usuario = {
        id: accounts.length +1,
        nome: nome,
        email: email,
        senha: senha,
        data: d
    }

    accounts.push(usuario);

    return usuario
}
