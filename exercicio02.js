// Crie um arquivo typescript com o nome exercicio02.ts,
// em uma função, do tipo arrow function, some dois números
// inteiros e adicione o seu retorno a uma variável local chamada sum e
// imprima no console.log o resultado.
// Os valores a serem somados devem ser passados como parâmetros da função e
// você que irá escolher os valores, não esqueça de declarar o tipo do retorno e o tipo dos parâmetros.
var sum = function (num1, num2) {
    if (num1 === void 0) { num1 = 1; }
    if (num2 === void 0) { num2 = 3; }
    return num1 + num2;
};
console.log(sum(7, 6));
