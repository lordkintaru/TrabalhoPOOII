import LivroLista from "./LivroLista";
import Livro from "./Livro";
import Item from "./Item";
import Revista from "./Revista";
import RevistaLista from "./RevistaLista";
import Membro from "./Membro";
import MembroLista from "./MembroLista";

class BibliotecaController {
    private _livroLista: LivroLista;
    private _revistaLista: RevistaLista;
    private _membrosLista: MembroLista;

    constructor(livroCatalogo: LivroLista = new LivroLista(),
        revistaCatalogo: RevistaLista = new RevistaLista(),
        membros: MembroLista = new MembroLista()) {
        this._livroLista = livroCatalogo;
        this._revistaLista = revistaCatalogo;
        this._membrosLista = membros;
    }

    get livroCatalogo(): LivroLista {
        return this._livroLista;
    }
    get revistaCatalogo(): RevistaLista {
        return this._revistaLista;
    }
    get membrosLista(): MembroLista {
        return this._membrosLista;
    }

    cadastrarLivro(livro: Livro): void {
        this._livroLista.adicionar(livro);
    }

    cadastrarRevista(revista: Revista): void {
        this._revistaLista.adicionar(revista);
    }
    cadastrarMembro(membro: Membro) : void {
        this._membrosLista.adicionar(membro);
    }

    removerMembro(membro: Membro): void {
        this._membrosLista.remover(membro);
    }

    realizarEmprestimoLivro(idLivro: number, idMembro: number, dataDevolucao: Date): boolean;
    realizarEmprestimoLivro(idMembro: number, idLivro: number, dataDevolucao: Date): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);

        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);

                if (livro != undefined) {
                    livro.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(livro);
                    this._livroLista.remover(livro);


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

    realizarEmprestimoRevista(idLivro: number, idRevista: number, dataDevolucao: Date): boolean;
    realizarEmprestimoRevista(idMembro: number, idRevista: number, dataDevolucao: Date): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);

        if (membro != undefined) {

            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);

                if (revista != undefined) {
                    revista.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(revista);
                    this._revistaLista.remover(revista);

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


    devolverLivro(idLivro: number, idMembro: number): boolean;
    devolverLivro(idMembro: number, idLivro: number): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            const item = this._livroLista.buscarPorId(idLivro);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this._livroLista.adicionar(item);
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }


    devolverRevista(idRevista: number, idMembros: number): boolean;
    devolverRevista(idMembros: number, idRevista: number): boolean {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = this._revistaLista.buscarPorId(idRevista);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this._revistaLista.adicionar(item);
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }
    consultarAtraso(): void {
        this._membrosLista.membros.forEach(membros => {
            membros.emprestimos.forEach(emprestimo => {
                if (emprestimo.verificarAtraso()) {
                    console.log(`O membro ${membros.nome} esta atrasado em o item ${emprestimo.toString()}`)};
                })
            })
        };
}





export default BibliotecaController;