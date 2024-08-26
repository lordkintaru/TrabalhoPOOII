abstract class Item {
    protected  _id: number;
    protected _titulo: string;
    protected _autor: string;
    protected _ISBN: number;
    protected _dataDevolucao: Date | null ;
    static _qtdItem: number = 1;

    constructor(titulo: string, autor: string, ISBN: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._ISBN = ISBN;
        this._dataDevolucao = null;
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
    get datatDevolucao(){
        if(this._dataDevolucao == null){
            return 'Este Item não foi emprestado'
        }else{
            return this._dataDevolucao;
        }
    }


    set titulo(titulo: string) {
        if(titulo! = this._titulo){
            this._titulo = titulo;
        }else{
            throw new SyntaxError('O titulo não pode ser igual ao antigo')
        }

    }
    set autor(autor: string) {
        if(autor! = this._autor){
            this._autor = autor;
        }else{
            throw new SyntaxError('O autor não pode ser igual ao antigo')
        }

    }
    set ISBN(ISBN: number) {
        if(ISBN! = this.ISBN){
            this.ISBN = ISBN;
        }else{
            throw new SyntaxError('O ISBN não pode ser igual ao antigo')
        }

    }
    set dataDevolucao(dataDevolucao: Date | null) {
        if(dataDevolucao !== this._dataDevolucao){
            this._dataDevolucao = dataDevolucao;
        }else{
            throw new SyntaxError('A data de devolução não pode ser igual a antiga')
        }
    }

    public verificarAtraso(): boolean {
        if(this._dataDevolucao == null){
            return false;
        }else if(this._dataDevolucao < new Date()){
            return true;
        }else{
            return false;
        }
    }
    public tostring(): string {
        return `ID: ${this._id}, Titulo: ${this._titulo}, Autor: ${this._autor}, ISBN: ${this._ISBN}`;
    }
}

export default Item;