function calcular(valor1, valor2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = Math.floor(valor1 / valor2); 
                const sobra = valor1 % valor2;
                return `Resultado: ${resultado}, Sobrou: ${sobra}`;
            } else {
                return "Não é possível dividir por zero.";
            }
        default:
            return "Operador inválido";
    }

    return `Resultado: ${resultado}`;
}

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const operador = prompt("Digite o operador (+, -, *, /):");

const resultado = calcular(valor1, valor2, operador);
console.log(resultado);
