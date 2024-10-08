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


    public adicionar(...revistas: Array<Revista>): void {
        this._revistas = [...this._revistas, ...revistas];
        
    }

    public remover(...idRevista: Array<number>): void {
        idRevista.forEach(r => {
            this._revistas = this._revistas.filter(revista => revista.id != r);
        })
    }

    public buscarPorId(id: Number): Revista | undefined {
        return this._revistas.find(revista => revista.id == id);
    }

    public toString(): string {
        return this._revistas.toString();
    }

}


export default RevistaLista