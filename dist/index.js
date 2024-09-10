"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MembroLista_1 = __importDefault(require("./MembroLista"));
const Dependente_1 = __importDefault(require("./Dependente"));
const Titular_1 = __importDefault(require("./Titular"));
const LivroLista_1 = __importDefault(require("./LivroLista"));
const Livro_1 = __importDefault(require("./Livro"));
const Revista_1 = __importDefault(require("./Revista"));
const RevistaLista_1 = __importDefault(require("./RevistaLista"));
const BibliotecaController_1 = __importDefault(require("./BibliotecaController"));
try {
    //Após as importações, instanciar os objetos para realizar os testes;
    const livros = new LivroLista_1.default([new Livro_1.default('Harry Potter', 'J.K. Rowling', 4523123, 'fantasia'), new Livro_1.default('Senhor dos Aneis', 'J.R.R. Tolkien', 321321, 'fantasia'), new Livro_1.default('Java fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('JavaScript fundamentos', 'Gustavo Guanabara', 3213123, 'educativo'), new Livro_1.default('React Avancado', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('Python fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('C++ fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('C# fundamentos', 'Gustavo Guanabara', 1231312, 'educativo')]);
    const revistas = new RevistaLista_1.default([new Revista_1.default('Coleção Natura', 'Natura', 523134, new Date('2021-05-07')), new Revista_1.default('Ciência todo dia', 'Globo', 123123, new Date('2024-01-01')), new Revista_1.default('Fashion todo dia', 'Zara', 572381, new Date('2020-07-02')), new Revista_1.default('Cozinha todo dia', 'Jacquin', 590234, new Date('2014-02-11')), new Revista_1.default('Notas Musicais', 'The Drummer', 734123, new Date('2008-12-01')), new Revista_1.default('Os muquiranas', 'Painel', 756943, new Date('2019-11-01'))]);
    const membros = new MembroLista_1.default([new Titular_1.default('Joaquim', 'ativo'), new Titular_1.default('João', 'inativo'), new Dependente_1.default('Maria', 'inativo'), new Dependente_1.default('Jose', 'ativo'), new Dependente_1.default('Pedro', 'ativo'), new Titular_1.default('Carlos', 'ativo'), new Titular_1.default('Lucas', 'ativo'), new Titular_1.default('Ana', 'inativo'), new Titular_1.default('Paula', 'ativo'), new Dependente_1.default('Lucia', 'inativo')]);
    const biblioteca = new BibliotecaController_1.default(livros, revistas, membros);
    //Fazendo associação dos Dependentes com o Titular;
    console.log("--Fazendo associação dos Dependentes com o Titular");
    biblioteca.associarDependenteAoTitular(1, 1); //Tentando realizar uma associação errada.
    biblioteca.associarDependenteAoTitular(3, 1); //Associando o dependente 3 ao Titular 1.
    biblioteca.associarDependenteAoTitular(4, 1); //Associando o dependente 4 ao Titular 1.
    biblioteca.associarDependenteAoTitular(5, 6); //Associando o dependente 5 ao Titular 6.
    biblioteca.associarDependenteAoTitular(10, 7); //Associando o dependente 10 ao Titular 7.
    console.log("\n");
    //Fazendo locação de livros;
    console.log("--Fazendo locação de livros");
    biblioteca.emprestarItem(1, 1, new Date('2021-05-07'));
    biblioteca.emprestarItem(2, 5, new Date('2021-05-07')); //Fazendo locação de livros com o membro inativo;
    biblioteca.emprestarItem(4, 5, new Date('2024-09-09'));
    console.log("\n");
    //Fazendo locação de revistas;
    console.log("--Fazendo locação de revistas");
    biblioteca.emprestarItem(7, 9, new Date('2021-05-07'));
    biblioteca.emprestarItem(3, 5, new Date('2021-05-07')); //Fazendo locação de revistas com o membro inativo;
    biblioteca.emprestarItem(5, 11, new Date('2024-09-09'));
    console.log("\n");
    //Verificando atrasos;
    console.log("--Verificando atrasos");
    biblioteca.consultarMembrosAtrasos();
    console.log("\n");
    //Fazendo devolucões de livros;
    console.log("--Fazendo devolucões de livros");
    biblioteca.devolverItem(1, 1);
    biblioteca.devolverItem(2, 5); //Fazendo devolucão de livros com o membro inativo;
    biblioteca.devolverItem(4, 5);
    console.log("\n");
    //Fazendo devolucões de revistas;
    console.log("--Fazendo devolucões de revistas");
    biblioteca.devolverItem(7, 9);
    biblioteca.devolverItem(3, 5); //Fazendo devolucão de revistas com o membro inativo;
    biblioteca.devolverItem(5, 11);
    console.log("\n");
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=index.js.map