import LivroLista from "./LivroLista";
import Livro from "./Livro";
import Item from "./Item";
import Revista from "./Revista";
import RevistaLista from "./RevistaLista";
import Membro from "./Membro";
import Titular from "./Titular";
import Dependente from "./Dependente";

class BibliotecaController {
    private _livroLista: LivroLista;
    private _revistaLista: RevistaLista;
    private _membros: Array<Membro>;

    constructor(livroCatalogo: LivroLista = new LivroLista(),
        revistaCatalogo: RevistaLista = new RevistaLista(),
        membros: Array<Membro> = Array<Membro>()) {
        this._livroLista = livroCatalogo;
        this._revistaLista = revistaCatalogo;
        this._membros = membros;
    }

    get livroCatalogo(): LivroLista {
        return this._livroLista;
    }
    get revistaCatalogo(): RevistaLista {
        return this._revistaLista;
    }
    get membros(): Array<Membro> {
        return this._membros;
    }

    cadastrarLivro(livro: Livro): void {
        this._livroLista.adicionar(livro);
    }

    cadastrarRevista(revista: Revista): void {
        this._revistaLista.adicionar(revista);
    }
    cadastrarMembro(membro: Membro) : void {
        this._membros.push(membro);
    }

    removerMembro(membros: Membro): void {
        this._membros = this._membros.filter((m) => m.id != membros.id);
    }

    realizarEmprestimoLivro(idLivro: number, idMembro: number): boolean;
    realizarEmprestimoLivro(idMembro: number, idLivro: number): boolean {
        const membro = this._membros.find((membro) => membro.id === idMembro);

        if (membro != undefined) {

            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);

                if (livro != undefined) {
                    membro.adicionarEmprestimo(livro);

                    return true;
                } else {

                    return false;
                }

            } else {
                return false;
            }

        } else {
            return false
        }

    }

    realizarEmprestimoRevista(idLivro: number, idRevista: number): boolean;
    realizarEmprestimoRevista(idMembro: number, idRevista: number): boolean {
        const membro = this._membros.find((membro) => membro.id === idMembro);

        if (membro != undefined) {

            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);

                if (revista != undefined) {
                    membro.adicionarEmprestimo(revista);

                    return true;
                } else {

                    return false;
                }

            } else {
                return false;
            }

        } else {
            return false
        }
    }



}

export default BibliotecaController;