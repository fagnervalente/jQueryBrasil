// JavaScript Document

//Executa quando todo DOM(Árvore de elementos HTML) for carregado 
$(function(){
	
	$.AddRow();
	
	$('#button-add').click(function(e){
		
		e.preventDefault(); //anula a ação padrão do elemento, neste caso impede que o formulario seja enviado ao click deste botão
		
		$.AddRow(); // chamada da função que insere a nova linha;
		
	});
	
	$('#grid-produtos tbody :text').live('change',function(){
		
		$tr = $(this).closest('tr');
		
		if ( $(this).val() != '' )
			$tr.removeClass('linha_vazia');

		qtd_colunas = $(this).closest('tr').find('td').length - 1;
		$td = $(this).closest('td');
		
		if( $td.index() != qtd_colunas )
		{
			$(this).closest('td').next().find(':text').focus();
		}
		else
		{
			if ( $('.linha_vazia').length == 0 )
				$.AddRow();
			else
				$(this).closest('tr').next().find(':text:first').focus();
		}
	});
	
	$('#button-submit').click(function(){
		$('#form-produtos').submit();
	})
	
	

})



/* 
* Função: AddRow ( Adiciona Linha )
* Descrição: Insere uma nova linha no formulário 
*/
$.AddRow = function(){
	
	//Recuperando o tbody da table onde será inserido a nova linha
	$target = $('#grid-produtos tbody');
	
	//Montando o html da nova linha
	$nova_linha = $('<tr class="linha_vazia">' +
						'<td>' +
							'<input type="text" name="nome[]" />' +
						'</td>' + 
						'<td>' +
							'<input type="text" name="preco[]" />' +
						'</td>' + 
						'<td>' +
							'<input type="text" name="quantidade[]" />' +
						'</td>' + 
					'</tr>');
					
	
	
	$target.append( $nova_linha );
	
	$nova_linha.find(':text:first').focus();

	//inserindo na tabela a nova linha	
	//$nova_linha.find('input[type="text"]:first').focus();
	
	
	
}