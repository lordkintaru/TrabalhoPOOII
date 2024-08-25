"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Membro {
    constructor(nome, status = 'inativo') {
        this._status = 'ativo' || 'inativo';
        this._emprestimos = [];
        this._nome = nome;
        this._status = status;
        this._id = Membro._qtdMembros++;
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this._id;
    }
    get status() {
        return this._status;
    }
    get qtdMembros() {
        return Membro._qtdMembros;
    }
    get emprestimos() {
        return this._emprestimos;
    }
    set nome(nome) {
        if (nome = this._nome) {
            this._nome = nome;
        }
        else {
            throw new SyntaxError('O nome não pode ser igual ao antigo');
        }
    }
    set status(status) {
        if (status = this._status) {
            this._status = status;
        }
        else {
            throw new SyntaxError('O status não pode ser igual ao antigo');
        }
    }
    adicionarEmprestimo(...emprestimo) {
        this._emprestimos = [...this._emprestimos, ...emprestimo];
    }
    removerEmprestimo(emprestimo) {
        this._emprestimos = this._emprestimos.filter((e) => e.id != emprestimo.id);
    }
    toString() {
        return `ID: ${this._id}, Nome: ${this._nome}, Status: ${this._status}`;
    }
}
Membro._qtdMembros = 1;
exports.default = Membro;
//# sourceMappingURL=Membro.js.map