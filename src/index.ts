import Livro from "./Livro";
import Revista from "./Revista";
import LivroCatalogo from "./LivroCatalogo";
import RevistaCatalogo from "./RevistaCatalogo";



let livro1 = new Livro("Livro 1", "Autor 1", 123456789, "Ficção");
let livro2 = new Livro("Livro 2", "Autor 2", 987654321, "Ficção");
let revista1 = new Revista("Revista 1", "Autor 1", 123456789, new Date(2020, 1, 1));
let revista2 = new Revista("Revista 2", "Autor 2", 987654321, new Date(2021, 1, 1));

const catalogoLivro = new LivroCatalogo([livro1, livro2]);

console.log(catalogoLivro.toString());