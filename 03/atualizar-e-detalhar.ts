import { lerBancoDeDados, escreverNoBancoDeDados } from "../01/escrita-e-leitura";
import { Usuario, Endereco } from "../02/cadastro-e-listagem";

type PropsParaAtualizacao = {
    cpfDoUsuario: number | string,
    propriedadeSofrendoAlteracao: string,
    novosDados: string | number | Endereco
}

const atualizarUsuario = ({ cpfDoUsuario, propriedadeSofrendoAlteracao, novosDados }: PropsParaAtualizacao): Usuario => {
    const usuarios: Usuario[] = lerBancoDeDados();
    const usuarioEncontrado: Usuario | undefined = usuarios.find((usuario: Usuario) => {
        return usuario.cpf === cpfDoUsuario
    })

    if (!usuarioEncontrado) {
        throw new Error("Usuário não encontrado");
    }

    const indexDoUsuario = usuarios.indexOf(usuarioEncontrado);

    usuarios[indexDoUsuario] = {
        ...usuarios[indexDoUsuario],
        [propriedadeSofrendoAlteracao]: novosDados
    }

    escreverNoBancoDeDados(usuarios);
    return usuarios[indexDoUsuario];
};

const detalharUsuario = (cpfDoUsuario: number | string): Usuario | void => {
    const usuarios: Usuario[] = lerBancoDeDados();
    const usuarioEncontrado: Usuario | undefined = usuarios.find((usuario: Usuario) => {
        return usuario.cpf === cpfDoUsuario
    })

    if (!usuarioEncontrado) {
        throw new Error("Usuário não encontrado");
    }

    return usuarioEncontrado;
};