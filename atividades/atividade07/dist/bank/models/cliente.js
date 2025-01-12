"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id = 0, nome = "", cpf = "", dataNascimento = new Date(), contas = []) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    removerConta(numero) {
        this.contas = this.contas.filter(conta => conta.getNumero() !== numero);
    }
    //getters
    getCpf() {
        return this.cpf;
    }
    getContas() {
        return this.contas;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    //adicinar conta ao array de contas
    adicionarConta(conta) {
        this.contas.push(conta);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map