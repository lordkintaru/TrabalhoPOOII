"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MembroLista {
    constructor(membros = Array()) {
        this._membros = membros;
    }
    get membros() {
        return this._membros;
    }
    adicionar(...membros) {
        this._membros = [...this._membros, ...membros];
    }
    remover(...idMembro) {
        idMembro.forEach(m => {
            this._membros = this._membros.filter(membro => membro.id != m);
        });
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