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

    //Fazendo associação dos Dependentes com o Titular;
    console.log("--Fazendo associação dos Dependentes com o Titular");
    biblioteca.associarDependenteAoTitular(1, 1);//Tentando realizar uma associação errada.
    biblioteca.associarDependenteAoTitular(3,1);//Associando o dependente 3 ao Titular 1.
    biblioteca.associarDependenteAoTitular(4,1);//Associando o dependente 4 ao Titular 1.
    biblioteca.associarDependenteAoTitular(5,6);//Associando o dependente 5 ao Titular 6.
    biblioteca.associarDependenteAoTitular(10,7);//Associando o dependente 10 ao Titular 7.
    console.log("\n");

    //Fazendo locação de livros;
    console.log("--Fazendo locação de livros");
    biblioteca.realizarEmprestimoLivro(1, 1, new Date('2021-05-07'));
    biblioteca.realizarEmprestimoLivro(2, 5, new Date('2021-05-07'));//Fazendo locação de livros com o membro inativo;
    biblioteca.realizarEmprestimoLivro(4, 5, new Date('2024-09-09'));
    console.log("\n");

    //Fazendo locação de revistas;
    console.log("--Fazendo locação de revistas");
    biblioteca.realizarEmprestimoRevista(7, 9, new Date('2021-05-07'));
    biblioteca.realizarEmprestimoRevista(3, 5, new Date('2021-05-07'));//Fazendo locação de revistas com o membro inativo;
    biblioteca.realizarEmprestimoRevista(5, 11, new Date('2024-09-09'));
    console.log("\n");

    //Verificando atrasos;
    console.log("--Verificando atrasos");
    biblioteca.consultarMembrosAtrasos();
    console.log("\n");

    //Fazendo devolucões de livros;
    console.log("--Fazendo devolucões de livros");
    biblioteca.devolverLivro(1, 1);
    biblioteca.devolverLivro(2, 5);//Fazendo devolucão de livros com o membro inativo;
    biblioteca.devolverLivro(4, 5);
    console.log("\n");

    //Fazendo devolucões de revistas;
    console.log("--Fazendo devolucões de revistas");
    biblioteca.devolverRevista(7, 9);
    biblioteca.devolverRevista(3, 5);//Fazendo devolucão de revistas com o membro inativo;
    biblioteca.devolverRevista(5, 11);
    console.log("\n");
} catch (e) {
    console.log(e);
}







