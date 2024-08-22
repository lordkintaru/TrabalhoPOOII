"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Membro_1 = __importDefault(require("./Membro"));
class Titular extends Membro_1.default {
    constructor(nome, status, dependetes = Array()) {
        super(nome, status);
        this._dependentes = dependetes;
    }
    get dependetes() {
        return this._dependentes;
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
}
this._livros.splice(this._livros.indexOf(livro), 1);
//# sourceMappingURL=Titular.js.map