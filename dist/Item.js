"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(titulo, autor, ISBN) {
        this._titulo = titulo;
        this._autor = autor;
        this._ISBN = ISBN;
        this._id = Item._qtdItem++;
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get autor() {
        return this._autor;
    }
    get ISBN() {
        return this._ISBN;
    }
    get qtdItem() {
        return Item._qtdItem;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    set autor(autor) {
        this._autor = autor;
    }
    set ISBN(ISBN) {
        this._ISBN = ISBN;
    }
    tostring() {
        return `ID: ${this._id}, Titulo: ${this._titulo}, Autor: ${this._autor}, ISBN: ${this._ISBN}`;
    }
}
Item._qtdItem = 1;
exports.default = Item;
//# sourceMappingURL=Item.js.map