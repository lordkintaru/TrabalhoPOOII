"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Livro extends Item_1.default {
    constructor(titulo, autor, ISBN, categoria) {
        super(titulo, autor, ISBN);
        this._categoria = categoria;
    }
    get categoria() {
        return this._categoria;
    }
    set categoria(categoria) {
        if (categoria = this._categoria) {
            this._categoria = categoria;
        }
        else {
            throw new SyntaxError('A categoria não pode ser igual a antiga');
        }
    }
    toString() {
        return super.tostring() + `, Categoria: ${this._categoria}`;
    }
}
exports.default = Livro;
//# sourceMappingURL=Livro.js.map