// Crie um arquivo typescript com o nome exercicio02.ts, em uma função, do tipo arrow
// function, some dois números inteiros e adicione o seu retorno a uma variável local
// chamada sum e imprima no console.log o resultado. Os valores a serem somados devem
// ser passados como parâmetros da função e você que irá escolher os valores, não
// esqueça de declarar o tipo do retorno e o tipo dos parâmetros.

let sum = (num1: number = 1, num2: number = 3): number => {
  return num1 + num2;
};
console.log(sum(7, 6));
