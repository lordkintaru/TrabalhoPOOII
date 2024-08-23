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
        if(dataPublicacao! = this._dataPublicacao){
            this._dataPublicacao = dataPublicacao;
        }else {
            throw new SyntaxError('A data de publicação não pode ser igual a antiga');
        }
    }

    toString(): string {
        return super.tostring() + `, Data de publicação: ${this._dataPublicacao}`;
    }
}

export default Revista;