"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroLista_1 = __importDefault(require("./LivroLista"));
const RevistaLista_1 = __importDefault(require("./RevistaLista"));
const MembroLista_1 = __importDefault(require("./MembroLista"));
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
    adicionarLivro(livro) {
        this._livroLista.adicionar(livro);
    }
    adicionarRevista(revista) {
        this._revistaLista.adicionar(revista);
    }
    adicionarMembro(membro) {
        this._membrosLista.adicionar(membro);
    }
    removerMembro(membro) {
        this._membrosLista.remover(membro);
    }
    removerLivro(livro) {
        this._livroLista.remover(livro);
    }
    removerRevista(revista) {
        this._revistaLista.remover(revista);
    }
    realizarEmprestimoLivro(idMembro, idLivro, dataDevolucao) {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);
                if (livro != undefined) {
                    livro.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(livro);
                    this.removerLivro(livro);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    realizarEmprestimoRevista(idMembro, idRevista, dataDevolucao) {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);
                if (revista != undefined) {
                    revista.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(revista);
                    this.removerRevista(revista);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    devolverLivro(idMembro, idLivro) {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            const item = this._livroLista.buscarPorId(idLivro);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarLivro(item);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    devolverRevista(idMembros, idRevista) {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if (membro != undefined) {
            const item = this._revistaLista.buscarPorId(idRevista);
            if (item != undefined) {
                item.dataDevolucao = null;
                membro.removerEmprestimo(item);
                this.adicionarRevista(item);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    associarDependente(idTitular, idDependente) {
        const dependente = this._membrosLista.buscarPorId(idDependente);
        const titular = this._membrosLista.buscarPorId(idTitular);
        if (dependente != undefined && titular != undefined && titular instanceof Titular_1.default) {
            titular.adicionarDependente(dependente);
            return true;
        }
        else {
            return false;
        }
    }
    consultarMembrosAtrasos() {
        this._membrosLista.membros.forEach(membros => {
            membros.emprestimos.forEach(emprestimo => {
                if (emprestimo.verificarAtraso()) {
                    console.log(`O membro ${membros.nome} esta atrasado em o item ${emprestimo.toString()}`);
                }
                ;
            });
        });
    }
    ;
}
exports.default = BibliotecaController;
//# sourceMappingURL=BibliotecaController.js.map