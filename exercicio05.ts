// Crie um arquivo typescript com o nome exercicio05.ts, nele siga as instruções abaixo;
// Para treinar o uso de construtores crie uma classe chamada **Animal** com os atributos **nome:string**, **raca:string**, **corPelagem: string** e **peso:number**. Nele chame e popule todos os atributos pelo construtor como no exemplo em anexo:

class Animal {
  nome: string;
  raca: string;
  corPelagem: string;
  peso: number;

  constructor(nome: string, raca: string, corPelagem: string, peso: number) {
    this.nome = nome;
    this.raca = raca;
    this.corPelagem = corPelagem;
    this.peso = peso;
  }
}

let cachorro = new Animal('cachorro', 'Schnauzer', 'cinza', 4);
console.log(cachorro);
