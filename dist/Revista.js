"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Revista extends Item_1.default {
    constructor(titulo, autor, ISBN, dataPublicacao) {
        super(titulo, autor, ISBN);
        this._dataPublicacao = dataPublicacao;
    }
    get dataPublicacao() {
        return this._dataPublicacao;
    }
    set dataPublicacao(dataPublicacao) {
        if (dataPublicacao = this._dataPublicacao) {
            this._dataPublicacao = dataPublicacao;
        }
        else {
            throw new SyntaxError('A data de publicação não pode ser igual a antiga');
        }
    }
    toString() {
        return super.tostring() + `, Data de publicação: ${this._dataPublicacao}`;
    }
}
exports.default = Revista;
//# sourceMappingURL=Revista.js.map