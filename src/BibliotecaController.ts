import LivroLista from "./LivroLista";
import Livro from "./Livro";
import Revista from "./Revista";
import RevistaLista from "./RevistaLista";
import Membro from "./Membro";
import MembroLista from "./MembroLista";
import Dependente from "./Dependente";
import Titular from "./Titular";
import ILista from "./ILista";
import Item from "./Item";

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
    public cadastrarItem (item: Item): void {
        if(item instanceof Livro){
            this._livroLista.adicionar(item);
        }else if(item instanceof Revista){
            this._revistaLista.adicionar(item);
        }
    }

    public adicionarMembro(membro: Membro): void {
        this._membrosLista.adicionar(membro);
      
    }

    
    public removerMembroPorId(...idMembro: Array<number>): void {
        idMembro.forEach(m => {
            const membro = this._membrosLista.buscarPorId(m);
            if(membro instanceof Dependente){
                this._membrosLista.membros.forEach(ml =>{
                    if(ml instanceof Titular){
                        ml.removerDependente(membro)
                    }
                })
            }
            this._membrosLista.remover(...idMembro);
        })
        
    }

    public removerItemId(...idItem: Array<number>): void {
        idItem.forEach(i => {
            this._livroLista.remover(...idItem);
            this._revistaLista.remover(...idItem);
        })
    }
    public buscarItemPorId(id: number): Item | undefined {
        return this._livroLista.buscarPorId(id) || this._revistaLista.buscarPorId(id);
    }

    public emprestarItem(idMembros: number, idItem: number, dataDevolucao: Date): void {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined && membro.status === 'ativo') {
            const item = this.buscarItemPorId(idItem);
            if (item != undefined) {
                item.dataDevolucao = dataDevolucao;
                membro.adicionarEmprestimo(item);
                this.removerItemId(item.id);
                console.log(`Item ${item.titulo} emprestado com sucesso`)
            } else {
                console.log(`Item não encontrado`)
            }
        } else {
            console.log(`Membros não encontrado ou o membro não esta ativo`)
    }

    }

    public devolverItem(idMembros: number, idItem: number): void {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = membro.buscarEmprestimoPorId(idItem);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.cadastrarItem(item);
                console.log(`Item ${item.titulo} devolvido com sucesso`)
            } else {
                console.log(`Item não encontrado`)
            }
        } else {
            console.log(`Membros não encontrado`)
        }
    }

    public associarDependenteAoTitular(idDependente: number, idTitular: number): void{
        const dependente = this._membrosLista.buscarPorId(idDependente);
        const titular = this._membrosLista.buscarPorId(idTitular);
        if (dependente != undefined && titular != undefined && titular instanceof Titular && dependente instanceof Dependente) {
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

