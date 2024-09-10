"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroLista_1 = __importDefault(require("./LivroLista"));
const Livro_1 = __importDefault(require("./Livro"));
const Revista_1 = __importDefault(require("./Revista"));
const RevistaLista_1 = __importDefault(require("./RevistaLista"));
const MembroLista_1 = __importDefault(require("./MembroLista"));
const Dependente_1 = __importDefault(require("./Dependente"));
const Titular_1 = __importDefault(require("./Titular"));
class BibliotecaController {
    constructor(livroCatalogo = new LivroLista_1.default(), revistaCatalogo = new RevistaLista_1.default(), membros = new MembroLista_1.default()) {
        this._livroLista = livroCatalogo;
        this._revistaLista = revistaCatalogo;
        this._membrosLista = membros;
    }
    get livroCatalogo() {
        return this._livroLista;
    }
    get revistaCatalogo() {
        return this._revistaLista;
    }
    get membrosLista() {
        return this._membrosLista;
    }
    cadastrarItem(item) {
        if (item instanceof Livro_1.default) {
            this._livroLista.adicionar(item);
        }
        else if (item instanceof Revista_1.default) {
            this._revistaLista.adicionar(item);
        }
    }
    adicionarMembro(membro) {
        this._membrosLista.adicionar(membro);
    }
    removerMembroPorId(...idMembro) {
        idMembro.forEach(m => {
            const membro = this._membrosLista.buscarPorId(m);
            if (membro instanceof Dependente_1.default) {
                this._membrosLista.membros.forEach(ml => {
                    if (ml instanceof Titular_1.default) {
                        ml.removerDependente(membro);
                    }
                });
            }
            this._membrosLista.remover(...idMembro);
        });
    }
    removerItemId(...idItem) {
        idItem.forEach(i => {
            this._livroLista.remover(...idItem);
            this._revistaLista.remover(...idItem);
        });
    }
    buscarItemPorId(id) {
        return this._livroLista.buscarPorId(id) || this._revistaLista.buscarPorId(id);
    }
    emprestarItem(idMembros, idItem, dataDevolucao) {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined && membro.status === 'ativo') {
            const item = this.buscarItemPorId(idItem);
            if (item != undefined) {
                item.dataDevolucao = dataDevolucao;
                membro.adicionarEmprestimo(item);
                this.removerItemId(item.id);
                console.log(`Item ${item.titulo} emprestado com sucesso`);
            }
            else {
                console.log(`Item não encontrado`);
            }
        }
        else {
            console.log(`Membros não encontrado ou o membro não esta ativo`);
        }
    }
    devolverItem(idMembros, idItem) {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = membro.buscarEmprestimoPorId(idItem);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.cadastrarItem(item);
                console.log(`Item ${item.titulo} devolvido com sucesso`);
            }
            else {
                console.log(`Item não encontrado`);
            }
        }
        else {
            console.log(`Membros não encontrado`);
        }
    }
    associarDependenteAoTitular(idDependente, idTitular) {
        const dependente = this._membrosLista.buscarPorId(idDependente);
        const titular = this._membrosLista.buscarPorId(idTitular);
        if (dependente != undefined && titular != undefined && titular instanceof Titular_1.default && dependente instanceof Dependente_1.default) {
            titular.adicionarDependente(dependente);
            console.log(`Dependente ${dependente.nome} associado ao Titular ${titular.nome}`);
        }
        else {
            console.log(`Dependente ou Titular não encontrado`);
        }
    }
    consultarMembrosAtrasos() {
        this._membrosLista.membros.forEach(membros => {
            membros.emprestimos.forEach(emprestimo => {
                if (emprestimo.verificarAtraso()) {
                    console.log(`O membro ID ${membros.id} ${membros.nome} esta atrasado em o item ${emprestimo.toString()}`);
                }
                ;
            });
        });
    }
    ;
}
exports.default = BibliotecaController;
//# sourceMappingURL=BibliotecaController.js.map