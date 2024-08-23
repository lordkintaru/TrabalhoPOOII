"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RevistaCatalogo {
    constructor(revistas = Array()) {
        this._revistas = revistas;
    }
    get revistas() {
        return this._revistas;
    }
    adicionar(revista) {
        this._revistas.push(revista);
    }
    remover(revista) {
        this._revistas.splice(this._revistas.indexOf(revista), 1);
    }
    buscarPorId(id) {
        return this._revistas.find(revista => revista.id == id);
    }
    toString() {
        return this._revistas.toString();
    }
}
exports.default = RevistaCatalogo;
//# sourceMappingURL=RevistaCatalogo.js.map