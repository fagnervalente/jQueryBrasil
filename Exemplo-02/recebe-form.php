<?php

	$array_nome = $_POST['nome'];
	$array_preco = $_POST['preco'];
	$array_quantidade = $_POST['preco'];
	
	echo "<pre>";
	echo "Nomes : ";
	print_r($array_nome);
	echo "Preços : ";
	print_r($array_preco);
	echo "Quantidades : ";
	print_r($array_quantidade);
	echo "</pre>";


?>