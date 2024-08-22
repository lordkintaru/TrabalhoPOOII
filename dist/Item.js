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
        if (titulo = this._titulo) {
            this._titulo = titulo;
        }
        else {
            throw new SyntaxError('O titulo não pode ser igual ao antigo');
        }
    }
    set autor(autor) {
        if (autor = this._autor) {
            this._autor = autor;
        }
        else {
            throw new SyntaxError('O autor não pode ser igual ao antigo');
        }
    }
    set ISBN(ISBN) {
        if (ISBN = this.ISBN) {
            this.ISBN = ISBN;
        }
        else {
            throw new SyntaxError('O ISBN não pode ser igual ao antigo');
        }
    }
    tostring() {
        return `ID: ${this._id}, Titulo: ${this._titulo}, Autor: ${this._autor}, ISBN: ${this._ISBN}`;
    }
}
Item._qtdItem = 1;
exports.default = Item;
//# sourceMappingURL=Item.js.map