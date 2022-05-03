// Crie um arquivo typescript com o nome exercicio04.ts, nele crie uma classe chamada Filme com os atributos nome do tipo string,
//  anoDeLancamento do tipo number e diretor do tipo string. Fora do escopo dessa classe, instancie ela e preencha os campos
//  acessando seus atributos por meio do ponto (.).
var Filme = /** @class */ (function () {
    function Filme() {
    }
    return Filme;
}());
var filme1 = new Filme();
filme1.nome = 'Matrix';
filme1.anoDeLancamento = 1999;
filme1.diretor = 'Wachowskys';
console.log(filme1);
