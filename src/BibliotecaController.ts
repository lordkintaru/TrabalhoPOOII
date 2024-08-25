import LivroLista from "./LivroLista";
import Livro from "./Livro";
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
    public adicionarMembro(membro: Membro): void {
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

    public realizarEmprestimoLivro(idLivro: number, idMembro: number, dataDevolucao: Date): void;
    public realizarEmprestimoLivro(idMembro: number, idLivro: number, dataDevolucao: Date): void {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);
                if (livro != undefined) {
                    livro.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(livro);
                    this.removerLivroPorId(livro.id);
                    console.log(`Livro ${livro.titulo} devolvido com sucesso`)
                } else {
                    console.log(`Livro não encontrado`)
                }
            } else {
                console.log(`Membro não é ativo`)
            }
        } else {
            console.log(`Membro não encontrado`)
        }

    }

    public realizarEmprestimoRevista(idLivro: number, idRevista: number, dataDevolucao: Date): void;
    public realizarEmprestimoRevista(idMembro: number, idRevista: number, dataDevolucao: Date): void {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);
                if (revista != undefined) {
                    revista.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(revista);
                    this.removerRevistasPorId(revista.id);
                    console.log(`Revista ${revista.titulo} devolvida com sucesso`)
                } else {
                    console.log(`Revista não encontrada`)
                }
            } else {
                console.log(`Membro não é ativo`)
            }
        } else {
            console.log(`Membro não encontrado`)
        }
    }


    public devolverLivro(idLivro: number, idMembro: number): void;
    public devolverLivro(idMembro: number, idLivro: number): void {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            const item = this._livroLista.buscarPorId(idLivro);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarLivros(item);
                console.log(`Livro ${item.titulo} devolvido com sucesso`)
            } else {
                console.log(`Livro não encontrado`)
            }
        } else {
            console.log(`Membro não encontrado`)
        }
    }


    public devolverRevista(idRevista: number, idMembros: number): void;
    public devolverRevista(idMembros: number, idRevista: number): void {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = this._revistaLista.buscarPorId(idRevista);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarRevista(item);
                console.log(`Revista ${item.titulo} devolvida com sucesso`)
            } else {
                console.log(`Revista não encontrada`)
            }
        } else {
            console.log(`Membro não encontrado`)
        }
    }
    public associarDependente(idDependente: number, idTitular: number): void;
    public associarDependente(idTitular: number, idDependente: number): void {
        const dependente = this._membrosLista.buscarPorId(idDependente);
        const titular = this._membrosLista.buscarPorId(idTitular);
        if (dependente != undefined && titular != undefined && titular instanceof Titular) {
            titular.adicionarDependente(dependente);
            console.log(`Dependente ${dependente.nome} associado ao Titular ${titular.nome}`)
        } else {
            console.log(`Dependente ou Titular não encontrado`)
        }

    }
    public consultarMembrosAtrasos(): void {
        this._membrosLista.membros.forEach(membros => {
            membros.emprestimos.forEach(emprestimo => {
                if (emprestimo.verificarAtraso()) {
                    console.log(`O membro ID ${membros.id} ${membros.nome} esta atrasado em o item ${emprestimo.toString()}`)
                };
            })
        })
    };

}





export default BibliotecaController;