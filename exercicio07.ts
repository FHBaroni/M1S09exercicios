// Em um arquivo chamado exercicio07.ts crie uma interface chamada **Pessoa** com os seguintes atributos: *nome* do tipo string, *idade* do tipo numérico, *rua* do tipo string. Além disso, crie um método chamado *cadastrar()*.

// As classes **Aluno** e **Funcionario** que irá ser implementada pela classe **Pessoa** e terão os seguintes atributos:

// **Aluno** - *matricula* do tipo numérico e *cadeiras* do tipo array de strings.
// **Funcionario** - *identificador* do tipo numérico e *setor* do tipo string.

//O exercício consiste em implementar o método requerido pela interface **Pessoa** às classes **Aluno** e **Funcionario**. O método deverá imprimir em um console.log todas as informações sobre o aluno e funcionário cadastrado.
interface Pessoa {
  nome: string;
  idade: number;
  rua: string;

  cadastrar();
}

class Aluno implements Pessoa {
  nome: string;
  idade: number;
  rua: string;
  matricula: number;
  cadeiras: string[];

  constructor(valorNome, valorIdade, valorRua, valorMatricula, valorCadeiras) {
    this.nome = valorNome;
    this.idade = valorIdade;
    this.rua = valorRua;
    this.matricula = valorMatricula;
    this.cadeiras = valorCadeiras;
  }

  cadastrar() {
    console.log(
      `Aluno: ${this.nome} Idade: ${this.idade} Rua: ${this.rua} Matricula: ${this.matricula} Cadeiras: ${this.cadeiras} `
    );
  }
}

class Funcionario implements Pessoa {
  nome: string;
  idade: number;
  rua: string;
  identificador: number;
  setor: string;

  constructor(valorNome, valorIdade, valorRua, valorIdentificador, valorSetor) {
    this.nome = valorNome;
    this.idade = valorIdade;
    this.rua = valorRua;
    this.identificador = valorIdentificador;
    this.setor = valorSetor;
  }

  cadastrar() {
    console.log(
      `Funcionário: ${this.nome} Idade: ${this.idade} Rua: ${this.rua} Identificador: ${this.identificador} Setor: ${this.setor} `
    );
  }
}

let aluno = new Aluno('Fernando', 32, 'José Airton', 10102022, [
  'História da arte',
  'Game feel',
  'Programação orientada a gambiarras',
]);

let funcionario = new Funcionario(
  'Henrique',
  32,
  'Telmo Vieira',
  1023,
  'Manutenção'
);
aluno.cadastrar();
funcionario.cadastrar();
