document.addEventListener("deviceready", activeHeader, false);	
function activeHeader(){	
		$(function() {
				$( "[data-role='navbar']" ).navbar();
				$( "[data-role='header'], [data-role='footer']" ).toolbar();
				$("[data-role='header'], [data-role='navbar']").addClass("clr-bg-black");
				$("[data-role='header']").addClass("border");
				//$("[data-role='header'], [data-role='navbar']").addClass("clr-btn-black");
				$("[data-role='navbar'] a").addClass("menu-color");
				$("[data-role='navbar']").addClass("wow");
				$("[data-role='navbar']").addClass("fadeIn");
			});
			// Update the contents of the toolbars
}
$(document).on( "pagecontainerchange", function() {
				//alert("mudando botao");
				// Each of the four pages in this demo has a data-title attribute
				// which value is equal to the text of the nav button
				// For example, on first page: <div data-role="page" data-title="Info">
				var current = $( ".ui-page-active" ).jqmData( "title" );
				// Change the heading
				$( "[data-role='header'] h1" ).text( current );
				// Remove active class from nav buttons
				$("[data-role='navbar'] a.menu-active").removeClass( "menu-active" );
				// Add active class to current nav button
				$("[data-role='navbar'] a").each(function(){
					//alert("Atual: "+current);
					//alert("Atual: "+$(this).attr('id'));
					if ( $(this).attr('id') === current ) {
						$( this ).addClass( "menu-active" );
						//alert("mudando botao3");
					}
				});
			});