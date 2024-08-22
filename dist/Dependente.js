"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Membro_1 = __importDefault(require("./Membro"));
class Dependente extends Membro_1.default {
    constructor(nome, status) {
        super(nome, status);
    }
}
exports.default = Dependente;
//# sourceMappingURL=Dependente.js.map