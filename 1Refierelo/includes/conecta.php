<?php

$servidor = "laboratorio.curmxbx1nqbu.us-east-2.rds.amazonaws.com";
$usuario = "admin";
$password = "alex9531";
$bd = "refierelo_web";

$conecta = mysqli_connect($servidor, $usuario, $password, $bd);

if ($conecta -> connect_error) {
    die("Error al conectar con la base de datos ".$conecta -> connect_error);
}

?>