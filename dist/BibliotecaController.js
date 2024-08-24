"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroLista_1 = __importDefault(require("./LivroLista"));
const RevistaLista_1 = __importDefault(require("./RevistaLista"));
class BibliotecaController {
    constructor(livroCatalogo = new LivroLista_1.default(), revistaCatalogo = new RevistaLista_1.default(), membros = Array()) {
        this._livroLista = livroCatalogo;
        this._revistaLista = revistaCatalogo;
        this._membros = membros;
    }
    get livroCatalogo() {
        return this._livroLista;
    }
    get revistaCatalogo() {
        return this._revistaLista;
    }
    get membros() {
        return this._membros;
    }
    cadastrarLivro(livro) {
        this._livroLista.adicionar(livro);
    }
    cadastrarRevista(revista) {
        this._revistaLista.adicionar(revista);
    }
    cadastrarMembro(membro) {
        this._membros.push(membro);
    }
    removerMembro(membros) {
        this._membros = this._membros.filter((m) => m.id != membros.id);
    }
    realizarEmprestimoLivro(idMembro, idLivro) {
        const membro = this._membros.find((membro) => membro.id === idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const livro = this._livroLista.buscarPorId(idLivro);
                if (livro != undefined) {
                    membro.adicionarEmprestimo(livro);
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
    realizarEmprestimoRevista(idMembro, idRevista) {
        const membro = this._membros.find((membro) => membro.id === idMembro);
        if (membro != undefined) {
            if (membro.status == "ativo") {
                const revista = this._revistaLista.buscarPorId(idRevista);
                if (revista != undefined) {
                    membro.adicionarEmprestimo(revista);
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
}
exports.default = BibliotecaController;
//# sourceMappingURL=BibliotecaController.js.map