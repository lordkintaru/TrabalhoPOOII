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
    adicionarLivros(...livro) {
        this._livroLista.adicionar(...livro);
    }
    adicionarRevista(revista) {
        this._revistaLista.adicionar(revista);
    }
    adicionarMembro(membro) {
        this._membrosLista.adicionar(membro);
    }
    removerMembroPorId(...membro) {
        this._membrosLista.remover(...membro);
        membro.forEach(m => {
            if (m in )
                ;
        });
    }
    removerLivroPorId(...idLivro) {
        this._livroLista.remover(...idLivro);
    }
    removerRevistasPorId(...idRevista) {
        this._revistaLista.remover(...idRevista);
    }
    realizarEmprestimoLivro(idMembro, idLivro, dataDevolucao) {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);
                if (livro != undefined) {
                    livro.dataDevolucao = dataDevolucao;
                    membro.adicionarEmprestimo(livro);
                    this.removerLivroPorId(livro.id);
                    console.log(`Livro ${livro.titulo} emprestado com sucesso`);
                }
                else {
                    console.log(`Livro não encontrado`);
                }
            }
            else {
                console.log(`Membro não é ativo`);
            }
        }
        else {
            console.log(`Membro não encontrado`);
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
                    this.removerRevistasPorId(revista.id);
                    console.log(`Revista ${revista.titulo} emprestado com sucesso`);
                }
                else {
                    console.log(`Revista não encontrada`);
                }
            }
            else {
                console.log(`Membro não é ativo`);
            }
        }
        else {
            console.log(`Membro não encontrado`);
        }
    }
    devolverLivro(idMembro, idLivro) {
        const membro = this._membrosLista.buscarPorId(idMembro);
        if ((membro === null || membro === void 0 ? void 0 : membro.status) == "ativo") {
            if (membro != undefined) {
                const item = membro.buscarEmprestimoPorId(idLivro);
                if (item != undefined && item instanceof Livro_1.default) {
                    item.dataDevolucao = null;
                    membro.removerEmprestimo(item);
                    this.adicionarLivros(item);
                    console.log(`Livro ${item.titulo} devolvido com sucesso`);
                }
                else {
                    console.log(`Livro não encontrado`);
                }
            }
            else {
                console.log(`Membro não encontrado`);
            }
        }
        else {
            console.log(`Membros não e ativo, por isso não pode locar livros, logo não possui tal item`);
        }
    }
    devolverRevista(idMembros, idRevista) {
        const membro = this._membrosLista.buscarPorId(idMembros);
        if ((membro === null || membro === void 0 ? void 0 : membro.status) == "ativo") {
            if (membro != undefined) {
                const item = membro.buscarEmprestimoPorId(idRevista);
                if (item != undefined && item instanceof Revista_1.default) {
                    item.dataDevolucao = null;
                    membro.removerEmprestimo(item);
                    this.adicionarRevista(item);
                    console.log(`Revista ${item.titulo} devolvida com sucesso`);
                }
                else {
                    console.log(`Revista não encontrada`);
                }
            }
            else {
                console.log(`Membro não encontrado`);
            }
        }
        else {
            console.log(`Membro não e ativo, por isso não pode locar revistas, logo não possui tal item`);
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