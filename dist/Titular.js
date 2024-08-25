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
        this._dependentes = [...this._dependentes, dependente];
    }
    removerDependente(dependente) {
        this._dependentes = this._dependentes.filter((d) => d.id != dependente.id);
    }
    toString() {
        return super.toString() + `, Dependentes: ${this._dependentes}`;
    }
}
exports.default = Titular;
//# sourceMappingURL=Titular.js.map