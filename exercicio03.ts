// Crie um arquivo typescript com o nome exercicio03.ts, com o auxílio do objeto já criado abaixo e utilizando o conhecimento
//  aprendido em propriedades popule valores escolhidos por você para cada propriedade do objeto.
// OBS: No atributo cadeiras popule o array com no mínimo 4 cadeiras e logo após imprima em um console.log() o objeto completo.o:

let aluno: {
  nome: string;
  matricula: number;
  ativo: boolean;
  cadeiras: string[];
};

aluno = {
  nome: 'Fernando',
  matricula: 10102022,
  ativo: true,
  cadeiras: ['Programação', 'Game Desig', 'SFX', 'Arte 2D'],
};

console.log(aluno);
