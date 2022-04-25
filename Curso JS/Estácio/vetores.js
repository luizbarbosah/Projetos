// push serve para incluir um ou mais elementos dentro do array //
var alunos = ['ana', 'joao', 'bruna', 'carlos']
alunos.push('helena'); // inclusão de 01 elemento //
alunos.push('helena', 'maria', 'manu'); //inclusão de vários elementos //

// splice: serve para inserir, exclui e substituir elementos de um array //

var alunos = ['ana', 'joao', 'bruna', 'carlos']
// inserir:
alunos.splice[4,0,'luiz']
alert(alunos); //imprimirá 'ana', 'joao', 'bruna', 'carlos' e 'luiz'

// substituir:
alunos.splice[1,1,'manu']
alert(alunos); //imprimirá 'ana', 'manu', 'bruna', 'carlos' e 'luiz'

// length serve para saber o tamanho de um array //
alunos.length

// o metodo nativo "delete" serve para remover um elemento do array //
delete alunos['indetificar o indice que deseja remover'];
// obs: embora o metodo remova, ele nao reorganiza. permanecendo com o mesmo tamanho //

var alunos = [];  //array vazio
var alunos = ['Alex', 'Anna', 'João']; // array de strings
var notas = [10.0, 9.5, 9.5]; //array de números decimais
var mistura = ['Um', 2, 3, 'Quatro']; //array de diversos tipos de dados

var alunos = new Array();
var alunos = new Array('Alex', 'Anna', 'João');
var alunos = ['Alex', 'Anna', 'João']; // array de strings
alert(alunos[0]); //exibirá “Alex” na caixa de diálogo

var primos = [2,3,5,7,11,13,17];
primos.splice(2,2);
alert(primos); //imprimirá 2,3,11,13,17

var primos = [2,3,5,7,11,13,17];
alert(primos.length); //imprimirá 7
primos.length = 4;
alert(primos.length); //imprimirá 4