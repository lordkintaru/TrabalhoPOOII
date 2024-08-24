"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivroLista {
    constructor(livros = Array()) {
        this._livros = livros;
    }
    get livros() {
        return this._livros;
    }
    adicionar(livro) {
        this._livros.push(livro);
    }
    remover(livro) {
        this._livros.splice(this._livros.indexOf(livro), 1);
    }
    buscarPorId(id) {
        return this._livros.find(livro => livro.id == id);
    }
    toString() {
        return this._livros.toString();
    }
}
exports.default = LivroLista;
//# sourceMappingURL=LivroLista.js.map