document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	alert("SUCESSO");
	listaCategorias();
});
function listaCategorias(){
			$.ajax({
					url: "http://valeservices.webcindario.com/assets/php/listaCategorias.php",
					cache: false,
					success: function(arquivos){
						$("#catalogo").empty();
						if(arquivos.retorno != false){
							$.each(arquivos, function(x, arq){						
								$("#catalogo").append("<div class='col-xs-6 col-sm-3'><div class='box'><a href='#' class='ui-btn ui-btn-inline ui-btn-icon-block icones' OnClick='getCat("+arq.id+")'><img src='../valeapp/assets/files/"+arq.img+"' class='img img-lista'><br>"+arq.nome+"</div></div>");
							});
						}else{
							alert("Houve um erro na Página. Tente novamente");
						}
					}	
			});
  };
function getCat(id){
	alert(id);
}