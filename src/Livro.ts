import Item from "./Item";

class Livro extends Item {
    private _categoria: string;

    constructor(titulo: string, autor: string, ISBN: number, categoria: string) {
        super(titulo, autor, ISBN);
        this._categoria = categoria;
    }

    get categoria(): string {
        return this._categoria;
    }

    set categoria(categoria: string) {
        this._categoria = categoria;
    }

    toString(): string {
        return super.tostring() + `, Categoria: ${this._categoria}`;
    }
}

export default Livro;
