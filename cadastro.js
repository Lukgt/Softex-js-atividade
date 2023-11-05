Nome: String
Salário: Number
Idade: Number
Possuidiploma: Boolean

function cadastrarPessoa(nome, salario, idade, possuiDiploma) {
    
    if (typeof salario !== 'number' || typeof idade !== 'number') {
        console.log("O salário e a idade devem ser números.");
        return;
    }
    if (typeof possuiDiploma !== 'boolean') {
        console.log("O campo 'possuiDiploma' deve ser um booleano (true ou false).");
        return;
    }

    let pessoa = {
        nome: nome,
        salario: salario,
        idade: idade,
        possuiDiploma: possuiDiploma
    };
    return pessoa;
}

let pessoa1 = cadastrarPessoa("João", 3000, 25, true);
let pessoa2 = cadastrarPessoa("Maria", 2500, 30, false);
console.log(pessoa1);
console.log(pessoa2);