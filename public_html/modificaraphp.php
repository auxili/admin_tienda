<?php

$id=$_POST["id"];
$nombre=$_POST["nombre"];
$precio=$_POST["precio"];
$codigo=$_POST["codigo"];

    mysql_connect("localhost","root","") or die("Connection Error: " . mysql_error());
    mysql_select_db("daw") or die("Error conecting to db.");
    
	$SQL = "UPDATE articulos SET codigo='$codigo', nombre='$nombre', precio='$precio' WHERE id='$id';";
	
    mysql_query( $SQL ) or die("Couldn t execute query.".mysql_error());
		
	
	//Construyo un objeto json que indica que todo va bien, tengo que indicar que recibo json en el archivo index
	$datos=array('codigo'=>"OK, todo ha ido bien ACTUALIZADO");
	header("Content-type: application/json");	
	echo json_encode($datos);
	
?>



