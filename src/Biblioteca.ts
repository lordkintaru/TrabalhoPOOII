import LivroCatalogo from "./LivroCatalogo";
import Livro from "./Livro";
import Item from "./Item";
import Revista from "./Revista";
import RevistaCatalogo from "./RevistaCatalogo";
import Membro from "./Membro";
import Titular from "./Titular";
import Dependente from "./Dependente";

class Biblioteca {
    _livroCatalogo: LivroCatalogo;
    _revistaCatalogo: RevistaCatalogo;
    _membros: Array<Membro> ;

    constructor(livroCatalogo: LivroCatalogo = new LivroCatalogo(),
                revistaCatalogo: RevistaCatalogo = new RevistaCatalogo(),
                membros: Array<Membro> = Array<Membro>()) {
        this._livroCatalogo = livroCatalogo;
        this._revistaCatalogo = revistaCatalogo;
        this._membros = membros;
    }

    get livroCatalogo(): LivroCatalogo {
        return this._livroCatalogo;
    }
    get revistaCatalogo(): RevistaCatalogo {
        return this._revistaCatalogo;
    }
    get membros(): Array<Membro> {
        return this._membros;
    }

    cadastrarLivro(livro: Livro): void {
        this._livroCatalogo.adicionar(livro);
    }

    cadastrarRevista(revista: Revista): void {
        this._revistaCatalogo.adicionar(revista);
    }
    cadastrarMembro(membro: Membro): void {
        this._membros.push(membro);
    }

    removerMembro(membros: Membro): void {
        this._membros = this._membros.filter((m) => m.id != membros.id);
    }

    realizarEmprestimoLivro(idLivro: number, idMembro: number): boolean;
    realizarEmprestimoLivro(idMembro: number, idLivro: number): boolean {
        const membro = this._membros.find((membro) => membro.id === idMembro);
        if (membro != undefined) {
          const livro = this._livroCatalogo.buscarPorId(idLivro);
          if (livro != undefined) {
            membro.adicionarEmprestimo(livro);
            return true;
          }
        }
        return false;
    }

    realizarEmprestimoRevista(idLivro: number, idRevista: number): boolean;
    realizarEmprestimoRevista(idMembro: number, idRevista: number): boolean {
        const membro = this._membros.find((membro) => membro.id === idMembro);
        if (membro != undefined) {
          const revista = this._revistaCatalogo.buscarPorId(idRevista);
          if (revista != undefined) {
            membro.adicionarEmprestimo(revista);
            return true;
          }
        }
        return false;
    }
    
}