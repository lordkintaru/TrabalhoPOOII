import ILista from "./ILista";
import Revista from "./Revista";

class RevistaLista implements ILista {

    private _revistas: Array<Revista>;

    constructor(revistas : Array<Revista> = Array<Revista>()) {
        this._revistas = revistas;

    }

    get revistas() : Array<Revista> {
        return this._revistas;
    }

    adicionar(revista: Revista): void {
        this._revistas.push(revista);
    }

    remover(revista : Revista): void {
        this._revistas.splice(this._revistas.indexOf(revista), 1);
    }

    buscarPorId(id: Number): Revista | undefined {
        return this._revistas.find(revista => revista.id == id);
    }

    toString(): string {
        return this._revistas.toString();
    }

}


export default RevistaLista