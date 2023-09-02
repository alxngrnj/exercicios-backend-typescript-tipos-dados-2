import { escreverNoBancoDeDados, lerBancoDeDados } from "../01/escrita-e-leitura";
import { Usuario } from "../02/cadastro-e-listagem";

const excluirUsuario = (cpfDoUsuario: number | string): Usuario => {
    const usuarios: Usuario[] = lerBancoDeDados();
    const usuarioEncontrado: Usuario | void = usuarios
        .find((usuario: Usuario) => {
            return usuario.cpf === cpfDoUsuario
        });

    if (!usuarioEncontrado) throw new Error("Usuário não encontrado");

    const indexDoUsuario: number = usuarios.indexOf(usuarioEncontrado);
    const usuarioExcluido = usuarios.splice(indexDoUsuario, 1)[0];

    escreverNoBancoDeDados(usuarios);

    return usuarioExcluido;
}