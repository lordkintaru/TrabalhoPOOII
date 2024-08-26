import ILista from "./ILista";
import Livro from "./Livro";

class LivroLista implements ILista {
    private _livros: Array<Livro>;

    constructor(livros : Array<Livro> = Array<Livro>()) {
        this._livros = livros;
    }

    get livros() : Array<Livro> {
        return this._livros;
    }

    public adicionar(...livro: Array<Livro>): void {
        this._livros = [...this._livros, ...livro];
        
    }

    public remover(...idLivro: Array<number>): void {
        idLivro.forEach(l => {
            this._livros = this._livros.filter(livro => livro.id != l);
        })
    }

    public buscarPorId(id: Number): Livro | undefined {
        return this._livros.find(livro => livro.id == id);
    }

    public toString() : string {
        return this._livros.toString();
    }

}

export default LivroLista;