export type DadosCadastro = {
    nome: string,
    sobrenome: string,
    email: string,
    whatsapp: string,
    estadoCivil: string,
    endereco: Endereco
}

export type Endereco = {
    cep: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: string,
    complemento: string
}