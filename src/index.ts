import LivroLista from "./LivroLista";
import Livro from "./Livro";

const livros = new LivroLista();

livros.adicionar(new Livro('Harry Potter', 'J.K. Rowling',4523123, 'fantasia'),
                new Livro('Senhor dos Aneis', 'J.R.R. Tolkien', 321321, 'fantasia'),
                new Livro('Java fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'),
                new Livro('JavaScript fundamentos', 'Gustavo Guanabara', 3213123, 'educativo'),
                new Livro('React Avancado', 'Gustavo Guanabara', 1231312, 'educativo'),
                new Livro('Python fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'));

console.log(livros);

livros.remover(3,5);
console.log(livros);

