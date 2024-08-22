
abstract class Membros {

    protected _nome: string;
    protected _id: number;
    protected _status: string = 'ativo' || 'inativo';
    static _qtdMembros: number = 1;

    constructor(nome : string ,status : string = 'inativo') {
        this._nome = nome;
        this._status = status;
        this._id = Membros._qtdMembros++;
    }

    get nome(): string {
        return this._nome;
    }
    get id(): number {
        return this._id;
    }
    get status(): string {
        return this._status;
    }
    get qtdMembros(): number {
        return Membros._qtdMembros;
    }

    set nome(nome: string) {
        if(nome! = this._nome){
            this._nome = nome;
        }else{
            throw new SyntaxError('O nome não pode ser igual ao antigo');
        }
    }
    set status(status: string) {
        if(status! = this._status){
            this._status = status;
        }else{
            throw new SyntaxError('O status não pode ser igual ao antigo');
        }
    }

    toString(): string {
        return `ID: ${this._id}, Nome: ${this._nome}, Status: ${this._status}`;
    }
}
