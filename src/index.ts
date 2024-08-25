import Membro from "./Membro";
import MembroLista from "./MembroLista";
import Dependente from "./Dependente";
import Titular from "./Titular";
import LivroLista from "./LivroLista";
import Livro from "./Livro";
import Revista from "./Revista";
import RevistaLista from "./RevistaLista";
import BibliotecaController from "./BibliotecaController";

try {
    //Após as importações, instanciar os objetos para realizar os testes;
    const livros = new LivroLista([new Livro('Harry Potter', 'J.K. Rowling', 4523123, 'fantasia'), new Livro('Senhor dos Aneis', 'J.R.R. Tolkien', 321321, 'fantasia'), new Livro('Java fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro('JavaScript fundamentos', 'Gustavo Guanabara', 3213123, 'educativo'), new Livro('React Avancado', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro('Python fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro('C++ fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro('C# fundamentos', 'Gustavo Guanabara', 1231312, 'educativo')]);

    const revistas = new RevistaLista([new Revista('Coleção Natura', 'Natura', 523134, new Date('2021-05-07')), new Revista('Ciência todo dia', 'Globo', 123123, new Date('2024-01-01')), new Revista('Fashion todo dia', 'Zara', 572381, new Date('2020-07-02')), new Revista('Cozinha todo dia', 'Jacquin', 590234, new Date('2014-02-11')),new Revista('Notas Musicais','The Drummer',734123, new Date('2008-12-01')),new Revista('Os muquiranas', 'Painel',756943, new Date('2019-11-01'))]);

    const membros = new MembroLista([new Titular('Joaquim', 'ativo'), new Titular('João', 'inativo'), new Dependente('Maria', 'inativo'), new Dependente('Jose', 'ativo'), new Dependente('Pedro', 'ativo'), new Titular('Carlos', 'ativo'), new Titular('Lucas', 'ativo'), new Titular('Ana', 'inativo'), new Titular('Paula', 'ativo'), new Dependente('Lucia', 'inativo')]);

    const biblioteca = new BibliotecaController(livros, revistas, membros);

    
} catch (e) {
    console.log(e);
}







