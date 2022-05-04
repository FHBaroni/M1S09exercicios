"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(valorNome, valorIdade, valorRua, valorMatricula, valorCadeiras) {
        this.nome = valorNome;
        this.idade = valorIdade;
        this.rua = valorRua;
        this.matricula = valorMatricula;
        this.cadeiras = valorCadeiras;
    }
    Aluno.prototype.cadastrar = function () {
        console.log("Aluno: ".concat(this.nome, " Idade: ").concat(this.idade, " Rua: ").concat(this.rua, " Matricula: ").concat(this.matricula, " Cadeiras: ").concat(this.cadeiras, " "));
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario(valorNome, valorIdade, valorRua, valorIdentificador, valorSetor) {
        this.nome = valorNome;
        this.idade = valorIdade;
        this.rua = valorRua;
        this.identificador = valorIdentificador;
        this.setor = valorSetor;
    }
    Funcionario.prototype.cadastrar = function () {
        console.log("Funcion\u00E1rio: ".concat(this.nome, " Idade: ").concat(this.idade, " Rua: ").concat(this.rua, " Identificador: ").concat(this.identificador, " Setor: ").concat(this.setor, " "));
    };
    return Funcionario;
}());
var aluno = new Aluno('Fernando', 32, 'José Airton', 10102022, [
    'História da arte',
    'Game feel',
    'Programação orientada a gambiarras',
]);
var funcionario = new Funcionario('Henrique', 32, 'Telmo Vieira', 1023, 'Manutenção');
aluno.cadastrar();
funcionario.cadastrar();
