abstract class Item {
    private  _id: number;
    private _titulo: string;
    private _autor: string;
    private _ISBN: number;
    static _qtdItem: number = 1;

    constructor(titulo: string, autor: string, ISBN: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._ISBN = ISBN;
        this._id = Item._qtdItem++;
    }
    
    get id(): number {
        return this._id;
    }
   get titulo(): string {
        return this._titulo;
    }
    get autor(): string {    
        return this._autor;
    }
    get ISBN(): number {
        return this._ISBN;
    }
    get qtdItem(): number {
        return Item._qtdItem;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }
    set autor(autor: string) {
        this._autor = autor;
    }
    set ISBN(ISBN: number) {
        this._ISBN = ISBN;
    }

    tostring(): string {
        return `ID: ${this._id}, Titulo: ${this._titulo}, Autor: ${this._autor}, ISBN: ${this._ISBN}`;
    }
}

export default Item;