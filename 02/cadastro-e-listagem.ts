import {
    lerBancoDeDados,
    escreverNoBancoDeDados
} from "../01/escrita-e-leitura";

export type Endereco = {
    cep: number | string,
    rua: string,
    complemento?: string,
    cidade: string
}
export type Usuario = {
    nome: string,
    email: string,
    cpf: number | string,
    profissao?: string,
    endereco: Endereco | null
}

const cadastrarUsuario = (usuario: Usuario): Usuario => {
    escreverNoBancoDeDados(usuario);

    const usuarioCadastrado: Usuario = lerBancoDeDados()[-1];

    return usuarioCadastrado;
}

const listarUsuarios = (profissao?: string): Usuario[] => {
    if (profissao) {
        const usuarios: Usuario[] = lerBancoDeDados();
        return usuarios.filter((usuario: Usuario) => {
            return usuario.profissao === profissao
        })
    }

    return lerBancoDeDados();
};