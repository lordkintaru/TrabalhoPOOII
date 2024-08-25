import LivroLista from "./LivroLista";
import Livro from "./Livro";
import Item from "./Item";
import Revista from "./Revista";
import RevistaLista from "./RevistaLista";
import Membro from "./Membro";
import MembroLista from "./MembroLista";
import Dependente from "./Dependente";
import Titular from "./Titular";

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

    public adicionarLivros(...livro: Array<Livro>): void {
        this._livroLista.adicionar(...livro);
    }
    public adicionarRevista(revista: Revista): void {
        this._revistaLista.adicionar(revista);
    }
    public adicionarMembro(membro: Membro) : void {
        this._membrosLista.adicionar(membro);
    }
    public removerMembroPorId(...membro: Array<number>): void {
        this._membrosLista.remover(...membro);
    }
    public removerLivroPorId(...idLivro: Array<number>): void {
        this._livroLista.remover(...idLivro);
    }
    public removerRevistasPorId(...idRevista: Array<number>): void {
        this._revistaLista.remover(...idRevista);
    }

    public realizarEmprestimoLivro(idLivro: number, idMembro: number, dataDevolucao: Date): boolean;
    public realizarEmprestimoLivro(idMembro: number, idLivro: number, dataDevolucao: Date): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);
                if (livro != undefined) {
                    livro.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(livro);
                    this.removerLivroPorId(livro.id);
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

    public realizarEmprestimoRevista(idLivro: number, idRevista: number, dataDevolucao: Date): boolean;
    public realizarEmprestimoRevista(idMembro: number, idRevista: number, dataDevolucao: Date): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);
                if (revista != undefined) {
                    revista.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(revista);
                    this.removerRevistasPorId(revista.id);
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


    public devolverLivro(idLivro: number, idMembro: number): boolean;
    public devolverLivro(idMembro: number, idLivro: number): boolean {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            const item = this._livroLista.buscarPorId(idLivro);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarLivros(item);
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }


    public devolverRevista(idRevista: number, idMembros: number): boolean;
    public devolverRevista(idMembros: number, idRevista: number): boolean {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = this._revistaLista.buscarPorId(idRevista);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarRevista(item);
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }
    public associarDependente(idDependente: number, idTitular: number): boolean;
    public associarDependente(idTitular: number, idDependente: number): boolean {
        const dependente = this._membrosLista.buscarPorId(idDependente);
        const titular = this._membrosLista.buscarPorId(idTitular);
        if (dependente != undefined && titular != undefined && titular instanceof Titular) {
            titular.adicionarDependente(dependente);
            return true;
        } else {
            return false
        }
        
    }
    public consultarMembrosAtrasos(): void {
        this._membrosLista.membros.forEach(membros => {
            membros.emprestimos.forEach(emprestimo => {
                if (emprestimo.verificarAtraso()) {
                    console.log(`O membro ${membros.nome} esta atrasado em o item ${emprestimo.toString()}`)};
                })
            })
    };
    
}





export default BibliotecaController;