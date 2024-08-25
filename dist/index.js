"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Titular_1 = __importDefault(require("./Titular"));
const Livro_1 = __importDefault(require("./Livro"));
const BibliotecaController_1 = __importDefault(require("./BibliotecaController"));
const biblioteca = new BibliotecaController_1.default();
biblioteca.adicionarMembro(new Titular_1.default("Miguel", "ativo"));
biblioteca.adicionarMembro(new Titular_1.default("dssa", "ativo"));
biblioteca.adicionarLivro(new Livro_1.default("Livro 1", "Adsada", 3214123, "dasdas"));
console.log(biblioteca.livroCatalogo);
biblioteca.realizarEmprestimoLivro(1, 1, new Date(2022, 1, 1));
console.log(biblioteca.membrosLista.membros[0].emprestimos[0]);
//# sourceMappingURL=index.js.map