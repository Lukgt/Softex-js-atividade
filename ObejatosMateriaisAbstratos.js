// Objetos Materiais: Livro e Carro
// 1.Livro
// Atributos:(Título, Autor, Número de Páginas)
// Métodos: (Abrir, Fechar,ObterNúmeroDePáginas)
// 2.Carro
// Atributos: (Modelo, Cor, Velocidade Atual)
// Métodos: (Acelerar, Frear, ObterVelocidadeAtual)

// Objetos Abstratos: Conta Bancária e Calculadora
// 1.Conta Bancária
// Atributos:(Número da Conta, Saldo, Titular)
// Métodos: (Depositar, Sacar, ConsultarSaldo)
// Animal
// Atributos:(Nome, Idade, Espécie)
// Métodos:(EmitirSom, Envelhecer, Apresentar)

//Livro
class Livro {
  constructor(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.aberto = false;
  }

  abrir() {
    this.aberto = true;
    console.log(`Livro aberto: ${this.titulo} por ${this.autor}`);
  }

  fechar() {
    this.aberto = false;
    console.log(`Livro fechado: ${this.titulo}`);
  }

  obterNumeroDePaginas() {
    return this.numPaginas;
  }
}

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1000);
meuLivro.abrir();
console.log(`Número de Páginas: ${meuLivro.obterNumeroDePaginas()}`);
meuLivro.fechar();

//Carro
class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
  }

  acelerar(velocidade) {
    this.velocidadeAtual += velocidade;
    console.log(`Carro acelerando: ${this.modelo}, Velocidade: ${this.velocidadeAtual} km/h`);
  }

  frear() {
    this.velocidadeAtual = 0;
    console.log(`Carro freando: ${this.modelo}, Velocidade: ${this.velocidadeAtual} km/h`);
  }

  obterVelocidadeAtual() {
    return this.velocidadeAtual;
  }
}

const meuCarro = new Carro("Toyota Corolla", "Prata");
meuCarro.acelerar(50);
console.log(`Velocidade Atual: ${meuCarro.obterVelocidadeAtual()} km/h`);
meuCarro.frear();

//Conta Bancaria
class ContaBancaria {
  constructor(numeroConta, titular) {
    this.numeroConta = numeroConta;
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado na conta ${this.numeroConta}. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado na conta ${this.numeroConta}. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  consultarSaldo() {
    return this.saldo;
  }
}

const minhaConta = new ContaBancaria("123456", "João Silva");
minhaConta.depositar(1000);
minhaConta.sacar(500);
console.log(`Saldo Atual: ${minhaConta.consultarSaldo()}`);

// Animal
class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  emitirSom() {
    console.log(`${this.nome} está emitindo um som.`);
  }

  envelhecer() {
    this.idade++;
    console.log(`${this.nome} envelheceu. Idade atual: ${this.idade} anos.`);
  }

  apresentar() {
    console.log(`Este é ${this.nome}, um ${this.especie} com ${this.idade} anos.`);
  }
}

const meuAnimal = new Animal("Rex", 2, "Cachorro");
meuAnimal.emitirSom();
meuAnimal.envelhecer();
meuAnimal.apresentar();
