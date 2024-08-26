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
        if(categoria! = this._categoria){
            this._categoria = categoria;
        }else {
            throw new SyntaxError('A categoria não pode ser igual a antiga');
        }
    }

    public toString(): string {
        return super.tostring() + `, Categoria: ${this._categoria}`;
    }
}

export default Livro;
