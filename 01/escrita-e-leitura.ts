import fs from "fs";
import { Usuario } from "../02/cadastro-e-listagem";


export const lerBancoDeDados = (): Usuario[] => {
    try {
        const bancoDeDados: string = fs.readFileSync("bd.json", "utf8");
        return JSON.parse(bancoDeDados);
    } catch {
        return [];
    }
}


export const escreverNoBancoDeDados = (dados: Usuario | Usuario[]) => {
    if (Array.isArray(dados)) {
        const novoBanco: string = JSON.stringify(dados)
        fs.writeFileSync("bd.json", novoBanco);
    } else {
        const banco: Usuario[] = lerBancoDeDados();
        const novoBanco: string = JSON.stringify([...banco, dados])
        fs.writeFileSync("bd.json", novoBanco);
    }
}