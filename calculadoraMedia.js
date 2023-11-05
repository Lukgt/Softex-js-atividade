
let nota1 = parseFloat(prompt("Insira a primeira nota (entre 0 e 10):"));
let nota2 = parseFloat(prompt("Insira a segunda nota (entre 0 e 10):"));
let nota3 = parseFloat(prompt("Insira a terceira nota (entre 0 e 10):"));

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
    let media = (nota1 + nota2 + nota3) / 3;
    console.log("A média das notas é: " + media.toFixed(2));
} else {
    console.log("Por favor, insira notas válidas entre 0 e 10.");
}
