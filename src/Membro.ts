import Item from "./Item";
abstract class Membro {

    protected _nome: string;
    protected _id: number;
    protected _status: string = 'ativo' || 'inativo';
    static _qtdMembros: number = 1;
    protected _emprestimos: Array<Item> = [];

    constructor(nome : string ,status : string = 'inativo') {
        this._nome = nome;
        this._status = status;
        this._id = Membro ._qtdMembros++;
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
        return Membro._qtdMembros;
    }
    get emprestimos(): Array<Item> {
        return this._emprestimos;
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

    public adicionarEmprestimo(...emprestimo:Array<Item>): void {
       this._emprestimos = [...this._emprestimos, ...emprestimo];
     
    }
    public removerEmprestimo(emprestimo: Item): void {
        this._emprestimos = this._emprestimos.filter((e) => e.id != emprestimo.id);
    }
    public buscarEmprestimoPorId(id: number): Item | undefined {
        return this._emprestimos.find((e) => e.id == id);
    }
    public toString(): string {
        return `ID: ${this._id}, Nome: ${this._nome}, Status: ${this._status}`;
    }
}

export default Membro;
