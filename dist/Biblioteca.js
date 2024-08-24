"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroCatalogo_1 = __importDefault(require("./LivroCatalogo"));
const RevistaCatalogo_1 = __importDefault(require("./RevistaCatalogo"));
class Biblioteca {
    constructor(livroCatalogo = new LivroCatalogo_1.default(), revistaCatalogo = new RevistaCatalogo_1.default(), membros = Array()) {
        this._livroCatalogo = livroCatalogo;
        this._revistaCatalogo = revistaCatalogo;
        this._membros = membros;
    }
    get livroCatalogo() {
        return this._livroCatalogo;
    }
    get revistaCatalogo() {
        return this._revistaCatalogo;
    }
    get membros() {
        return this._membros;
    }
    cadastrarLivro(livro) {
        this._livroCatalogo.adicionar(livro);
    }
    cadastrarRevista(revista) {
        this._revistaCatalogo.adicionar(revista);
    }
    cadastrarMembro(membro) {
        this._membros.push(membro);
    }
    removerMembro(membros) {
        this._membros = this._membros.filter((m) => m.id != membros.id);
    }
    realizarEMprestimo(idMembro, idItem) {
        this._;
    }
}
//# sourceMappingURL=Biblioteca.js.map