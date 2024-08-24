import Titular from "./Titular";
import Livro from "./Livro";
import BibliotecaController from "./BibliotecaController";

const biblioteca = new BibliotecaController();

biblioteca.cadastrarMembro(new Titular("Miguel", "ativo"));
biblioteca.cadastrarLivro(new Livro("Livro 1", "Adsada",3214123,"dasdas"));




console.log(biblioteca.livroCatalogo);

biblioteca.realizarEmprestimoLivro(1, 1);

console.log(biblioteca.membros);
