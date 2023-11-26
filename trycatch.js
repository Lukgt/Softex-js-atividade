try {
  let numero1 = prompt("Digite o primeiro número:");
  let numero2 = prompt("Digite o segundo número:");
  
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Digite números válidos!"); 
    
  let resultado = numero1 / numero2;

  console.log("Resultado:", resultado);
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message);
} finally {
  console.log("O código foi executado.");
}
