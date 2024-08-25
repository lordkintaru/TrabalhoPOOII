"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RevistaLista {
    constructor(revistas = Array()) {
        this._revistas = revistas;
    }
    get revistas() {
        return this._revistas;
    }
    adicionar(...revistas) {
        this._revistas = [...this._revistas, ...revistas];
    }
    remover(...idRevista) {
        idRevista.forEach(r => {
            this._revistas = this._revistas.filter(revista => revista.id != r);
        });
    }
    buscarPorId(id) {
        return this._revistas.find(revista => revista.id == id);
    }
    toString() {
        return this._revistas.toString();
    }
}
exports.default = RevistaLista;
//# sourceMappingURL=RevistaLista.js.map