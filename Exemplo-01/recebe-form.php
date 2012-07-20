<?php

	$array_nome = $_POST['nome'];
	$array_preco = $_POST['preco'];
	$array_quantidade = $_POST['preco'];
	
	for( $index = 0; $index < sizeof($array_nome); $index++ )
	{
		echo "<b>Item: ".$index."</b></br>
			  <span>Nome: ".$array_nome[$index]."</span></br>
			  <span>Preço: ".$array_preco[$index]."</span></br>
			  <span>Quantidade: ".$array_quantidade[$index]."</span></br></br>";	
	}


?>