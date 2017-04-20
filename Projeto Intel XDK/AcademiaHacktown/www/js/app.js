var servidor = "http://www.valeapp.com.br/app";

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false);
$("document").ready(function(){
	$("#menulojas").on("click", function(){
		$.mobile.changePage( "catalogo.html", { transition: "slide", changeHash: false });
		getLojas();
	});
});
function getLojas(){
			$.ajax({
					url: servidor+"/web/getLojas.php",
					cache: false,
					beforeSend: function(){
					},
					complete: function(){
					},
					success: function(categorias){
						$("#catalogo").empty();
						if(categorias.retorno != false){
							$.each(categorias, function(x, arq){						
								//$("#catalogo").append("<div class='col-xs-6 col-sm-3'><div class='box'><a href='#' class='ui-btn ui-btn-inline ui-btn-icon-block icones' OnClick='getSubcategorias(\" "+arq.id+"\",\""+arq.nome+"\")'><img src='"+servidor+"/assets/files/icons/"+arq.img+"' class='img img-lista'><br>"+arq.nome+"</div></div>");
								$(".listaEvento").append("<li data-icon='false' style='border-bottom: 1px solid lightgray'><a href='#'><img src='"+servidor+"/assets/files/empresas/"+arq.img+"' class='img img-responsive'><h3>"+arq.nome+"</h3></a></li>");
								$(".listaEvento").listview("refresh");
							});
						}else{
							alert("Houve um erro na Página. Tente novamente");
						}
					}	
			});
  };