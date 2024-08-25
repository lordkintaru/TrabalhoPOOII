import Titular from "./Titular";
import Livro from "./Livro";
import BibliotecaController from "./BibliotecaController";

const biblioteca = new BibliotecaController();

biblioteca.adicionarMembro(new Titular("Miguel", "ativo"));
biblioteca.adicionarMembro(new Titular("dssa", "ativo"));
biblioteca.adicionarLivro(new Livro("Livro 1", "Adsada",3214123,"dasdas"));

console.log(biblioteca.livroCatalogo);

biblioteca.realizarEmprestimoLivro(1, 1, new Date(2022, 1, 1));

console.log(biblioteca.membrosLista.membros[0].emprestimos[0]);

