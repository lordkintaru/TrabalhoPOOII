import ILista from "./ILista";
import Membros from "./Membro";


class MembroLista implements ILista {
    private _membros: Array<Membros>;

    constructor(membros: Array<Membros> = Array<Membros>()) {
        this._membros = membros;
    }

    get membros() : Array<Membros> {
        return this._membros;
    }

    adicionar(membro: Membros): void {
        this._membros.push(membro);
    }

    remover(membros: Membros): void {
        this._membros.splice(this._membros.indexOf(membros), 1);
    }

    buscarPorId(id: Number): Membros | undefined {
        return this._membros.find(membros => membros.id == id);
    }

    toString(): string {
        return this._membros.toString();
    }

}

export default MembroLista; 