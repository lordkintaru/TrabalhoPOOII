import LivroCatalogo from "./LivroCatalogo";
import Livro from "./Livro";
import Revista from "./Revista";
import RevistaCatalogo from "./RevistaCatalogo";
import Membro from "./Membro";
import Titular from "./Titular";
import Dependente from "./Dependente";

class Biblioteca {
    _livroCatalogo: LivroCatalogo;
    _revistaCatalogo: RevistaCatalogo;
    _membros: Array<Membro> ;

    constructor(livroCatalogo: LivroCatalogo = new LivroCatalogo(),
                revistaCatalogo: RevistaCatalogo = new RevistaCatalogo(),
                membros: Array<Membro> = Array<Membro>()) {
        this._livroCatalogo = livroCatalogo;
        this._revistaCatalogo = revistaCatalogo;
        this._membros = membros;
    }

    get livroCatalogo(): LivroCatalogo {
        return this._livroCatalogo;
    }
    get revistaCatalogo(): RevistaCatalogo {
        return this._revistaCatalogo;
    }
    get membros(): Array<Membro> {
        return this._membros;
    }

    cadastrarLivro(livro: Livro): void {
        this._livroCatalogo.adicionar(livro);
    }

    cadastrarRevista(revista: Revista): void {
        this._revistaCatalogo.adicionar(revista);
    }

}