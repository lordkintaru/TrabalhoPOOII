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

    adicionarDependente(dependente: Dependente): void{
        this._dependentes.push(dependente);
    }

    
}