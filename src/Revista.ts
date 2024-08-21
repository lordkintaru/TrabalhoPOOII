import Item from "./Item";

class Revista extends Item {

    private _dataPublicacao: Date;

    constructor(titulo: string, autor: string, ISBN: number, dataPublicacao: Date) {
        super(titulo, autor, ISBN);
        this._dataPublicacao = dataPublicacao;
    }

    get dataPublicacao(): Date {
        return this._dataPublicacao;
    }

    set dataPublicacao(dataPublicacao: Date) {
        this._dataPublicacao = dataPublicacao;
    }

    toString(): string {
        return super.tostring() + `, Data de publicação: ${this._dataPublicacao}`;
    }
}

export default Revista;