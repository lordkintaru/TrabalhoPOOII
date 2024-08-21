import ICatalogo from "./ICatalogo";
import Livro from "./Livro";

class LivroCatalogo implements ICatalogo {
    private _livros: Array<Livro>;

    constructor(livros : Array<Livro> = Array<Livro>()) {
        this._livros = livros;
    }

    get livros() : Array<Livro> {
        return this._livros;
    }

    adicionar(livro: Livro): void {
        this._livros.push(livro);
        
    }

    remover(livro: Livro): void {
        this._livros.splice(this._livros.indexOf(livro), 1);
      
    }

    buscarPorId(id: Number): Livro | undefined {
        return this._livros.find(livro => livro.id == id);
    }

    toString() : string {
        return this._livros.toString();
    }

}

export default LivroCatalogo;