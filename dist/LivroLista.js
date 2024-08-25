"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivroLista {
    constructor(livros = Array()) {
        this._livros = livros;
    }
    get livros() {
        return this._livros;
    }
    adicionar(...livro) {
        this._livros = [...this._livros, ...livro];
    }
    remover(...idLivro) {
        idLivro.forEach(l => {
            this._livros = this._livros.filter(livro => livro.id != l);
        });
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