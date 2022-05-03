// Crie um arquivo typescript com o nome exercicio05.ts, nele siga as instruções abaixo;
// Para treinar o uso de construtores crie uma classe chamada **Animal** com os atributos **nome:string**, **raca:string**, **corPelagem: string** e **peso:number**. Nele chame e popule todos os atributos pelo construtor como no exemplo em anexo:
var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return Animal;
}());
var cachorro = new Animal('cachorro', 'Schnauzer', 'cinza', 4);
console.log(cachorro);
