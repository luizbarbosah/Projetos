<?php

$conexao = MySQLi ("mysql:host="localhost";dbname="codigo_barra";user="usuario";password=");

$regiao_origem = isset($_POST['regiao_origem']) ? $_POST ['regiao_origem'] : "";
$regiao_destino = isset($_POST['regiao_destino']) ? $_POST ['regiao_destino'] : "";
$cod_loggi = isset($_POST['cod_loggi']) ? $_POST ['cod_loggi'] : "";
$cod_vendedor = isset($_POST['cod_vendedor']) ? $_POST ['cod_vendedor'] : "";
$tipo_produto = isset($_POST['tipo_produto']) ? $_POST ['tipo_produto'] : "";

$sql = "insert into codigo_barra (regiao_origem, regiao_destino, cod_loggi, cod_vendedor, tipo_produto) values ('$regiao_origem', '$regiao_destino', '$cod_loggi', '$cod_vendedor', '$tipo_produto')";
$resultado = $conexao->query($sql) or trigger_error($conexao->error);

if ($resultado == 'true'){
    echo "Dados inseridos com sucesso";

}else{
    echo"false";
}

$conexao->close();

?>