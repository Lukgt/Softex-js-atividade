const Banco = {
  conta: "10000-6",
  saldo: 1500.00,
  tipoConta: "Corrente",
  agencia: "7890",

  // Método para buscar o saldo atual
  buscarSaldo: function () {
    return this.saldo;
  },

  // Método para realizar depósito
  deposito: function (valor) {
    this.saldo += valor;
    return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
  },

  // Método para realizar saque
  saque: function (valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente para realizar o saque.";
    } else {
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    }
  },

  // Método para obter o número da conta
  numeroConta: function () {
    return this.conta;
  }
};

console.log("Saldo atual:", Banco.buscarSaldo());
console.log(Banco.deposito(500.00));
console.log(Banco.saque(200.00));
console.log("Número da conta:", Banco.numeroConta());
