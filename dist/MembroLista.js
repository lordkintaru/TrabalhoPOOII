"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MembroLista {
    constructor(membros = Array()) {
        this._membros = membros;
    }
    get membros() {
        return this._membros;
    }
    adicionar(membro) {
        this._membros.push(membro);
    }
    remover(membros) {
        this._membros.splice(this._membros.indexOf(membros), 1);
    }
    buscarPorId(id) {
        return this._membros.find(membros => membros.id == id);
    }
    toString() {
        return this._membros.toString();
    }
}
exports.default = MembroLista;
//# sourceMappingURL=MembroLista.js.map