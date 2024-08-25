"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroLista_1 = __importDefault(require("./LivroLista"));
const Livro_1 = __importDefault(require("./Livro"));
const livros = new LivroLista_1.default();
livros.adicionar(new Livro_1.default('Harry Potter', 'J.K. Rowling', 4523123, 'fantasia'), new Livro_1.default('Senhor dos Aneis', 'J.R.R. Tolkien', 321321, 'fantasia'), new Livro_1.default('Java fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('JavaScript fundamentos', 'Gustavo Guanabara', 3213123, 'educativo'), new Livro_1.default('React Avancado', 'Gustavo Guanabara', 1231312, 'educativo'), new Livro_1.default('Python fundamentos', 'Gustavo Guanabara', 1231312, 'educativo'));
console.log(livros);
livros.remover(3, 5);
console.log(livros);
//# sourceMappingURL=index.js.map