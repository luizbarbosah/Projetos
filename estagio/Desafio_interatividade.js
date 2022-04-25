var jóias = 001;
var livros = 111;
var eletrônicos = 333;
var bebidas = 555;
var brinquedos = 888;

let centrooeste_origem = [201*299];
let nordeste_origem = [300*399];
let norte_origem = [400*499];
let sudeste_origem = [001*099];
let sul_origem = [100*199];

let centrooeste_destino = [201*299];
let nordeste_destino = [300*399];
let norte_destino = [400*499];
let sudeste_destino = [001*099];
let sul_destino = [100*199];

const cod_loggi = 555;

var cod_vendedor = "";



function nao_enviar(){

    var tipo_produto = document.getElementById("tipo_produto").value;
    const produto_sem_despacho = [001, 111, 333, 555, 888]
    if (produto_sem_despacho.indexOf(tipo_produto) > -1){
       alert("Não será possível despachar");
    }else{
       alert("Preparar para envio");
    }
}
function nao_despachar(){

    var tipo_produto = document.getElementById("tipo_produto").value;
    var região_origem = document.getElementById("região_origem").value;

    if (tipo_produto == 001 && região_origem >= 201 && região_origem <= 299){
       alert("Não será possível despachar");
    }else{
       alert("Preparar para envio");
    }
}
function alertVendedor(){

    var cod_vendedor = document.getElementById("cod_vendedor").value;
    if (cod_vendedor == 367){
       alert("CNPJ inativo");
    }else{
       alert("Preparar para envio");
    }
}

/*
var pacote_1 = 288 355 555 123 888;
var pacote_2 = 335 333 555 584 333;
var pacote_3 = 223 343 555 124 001; (2) jóias e origem: cento oeste
var pacote_4 = 002 111 555 874 555;
var pacote_5 = 111 188 555 654 777; (1) PRODUTO NÃO CONSTA NA LISTA
var pacote_6 = 111 333 555 123 333;
var pacote_7 = 432 055 555 123 888;
var pacote_8 = 079 333 555 584 333;
var pacote_9 = 155 333 555 124 001; (2) jóias e origem: cento-oeste
var pacote_10 = 333 188 555 584 333;
var pacote_11 = 555 288 555 123 001;
var pacote_12 = 111 388 555 123 555;
var pacote_13 = 288 000 555 367 333; (3) vendedor: CNPJ INATIVO
var pacote_14 = 066 311 555 874 001;
var pacote_15 = 110 333 555 123 555;
var pacote_16 = 333 488 555 584 333;
var pacote_17 = 455 448 555 123 001;
var pacote_18 = 022 388 555 123 555;
var pacote_19 = 432 044 555 845 333;
var pacote_20 = 034 311 555 874 001;
*/