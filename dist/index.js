"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("./Livro"));
const Revista_1 = __importDefault(require("./Revista"));
const LivroCatalogo_1 = __importDefault(require("./LivroCatalogo"));
let livro1 = new Livro_1.default("Livro 1", "Autor 1", 123456789, "Ficção");
let livro2 = new Livro_1.default("Livro 2", "Autor 2", 987654321, "Ficção");
let revista1 = new Revista_1.default("Revista 1", "Autor 1", 123456789, new Date(2020, 1, 1));
let revista2 = new Revista_1.default("Revista 2", "Autor 2", 987654321, new Date(2021, 1, 1));
const catalogoLivro = new LivroCatalogo_1.default([livro1, livro2]);
console.log(catalogoLivro.toString());
//# sourceMappingURL=index.js.map