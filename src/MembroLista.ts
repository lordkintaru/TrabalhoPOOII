import ILista from "./ILista";
import Membro from "./Membro";


class MembroLista implements ILista {
    private _membros: Array<Membro>;

    constructor(membros: Array<Membro> = Array<Membro>()) {
        this._membros = membros;
    }

    get membros() : Array<Membro> {
        return this._membros;
    }

    adicionar(...membros: Array<Membro>): void {
        this._membros = [...this._membros, ...membros];
        
    }

    remover(...idMembro: Array<number>): void {
        idMembro.forEach(m => {
            this._membros = this._membros.filter(membro => membro.id != m);
        })
    }

    buscarPorId(id: Number): Membro | undefined {
        return this._membros.find(membros => membros.id == id);
    }

    toString(): string {
        return this._membros.toString();
    }

}

export default MembroLista; 