import Membro from "./Membro";
import Dependente from "./Dependente";

class Titular extends Membro{

    private _dependentes: Array<Dependente>;


    constructor(nome: string, status: string, dependetes: Array<Dependente> = Array<Dependente>()){
        super(nome,status);
        this._dependentes = dependetes;
    }

    get dependetes() : Array<Dependente>{
        return this._dependentes;
    } 


    public adicionarDependente(...dependente: Array<Dependente> ) : void{
         this._dependentes = [...this._dependentes,...dependente]
        

    }
    public removerDependente(dependente: Dependente): void {
        this._dependentes = this._dependentes.filter((d) => d.id != dependente.id);
    }

    public toString(): string {
        return super.toString() + `, Dependentes: ${this._dependentes}`;
    }
    

    
}

export default Titular;