var           servidor = 'http://hacktown.petrolina.ifsertao-pe.edu.br/_mobile/requests/',
                 login = "login.php",
        ranking_grupos = "ranking_grupos.php",
    ranking_individual = "ranking_individual.php";

    function load(){
      $.mobile.loading( "show", {
            theme: $.mobile.loader.prototype.options.theme,
      });
    }
    function hide(){
      $.mobile.loading( "hide" );
    }
    $(document).on("pageinit", function(){
      $("[id$=individualRanking]").click(function(){
        $.mobile.changePage( "ranking_individual.html", { transition: "fade", changeHash: false });
        getIndividualRanking();
      });
      $("[id$=groupRanking]").click(function(){
        $.mobile.changePage( "ranking_grupo.html", { transition: "fade", changeHash: false });
        getGroupRanking();
      });
      $("[id$=home]").click(function(){
        $.mobile.changePage( "index.html", { transition: "fade", changeHash: false });
      });
    });

function getIndividualRanking(){
  $.ajax({
    url: servidor+ranking_individual,
    cache: false,
    beforeSend: function(){
    },
    complete: function(){
    },
    success: function(result){
      $("#tabelaRanking").empty();
      $.each(result, function(i, turma){
         var i = 0;
         var j= 0;
         $.each(turma, function(c, cadaturma){
              i++;
              if(i%2 == 0){
                var tabela = "<div data-role='collapsible' data-collapsed-icon='carat-d' data-expanded-icon='carat-u' class='collapse-ranking' id='collapse' data-inset='false'><h3>"+cadaturma.nome+"</h3><ul data-role='listview' class='listaRank'>";
              }else{
                var tabela = "<div data-role='collapsible' data-collapsed-icon='carat-d' data-expanded-icon='carat-u' class='collapse-ranking-imp' id='collapse' data-inset='false'><h3>"+cadaturma.nome+"</h3><ul data-role='listview' class='listaRank'>";
              }
              //console.log(cadaturma.nome);
              $.each(cadaturma.usuarios, function(x, aluno){
                j++;
                if(j%2 == 0){
                  tabela += "<li><div class='ui-grid-a'><div class='ui-block-a aluno'>"+aluno.nome+"</div> <div class='ui-block-b pts'>"+aluno.pontos+" pontos</div></li>";
                }else{
                  tabela += "<li><div class='ui-grid-a'><div class='ui-block-a aluno-imp'>"+aluno.nome+"</div> <div class='ui-block-b pts-imp'>"+aluno.pontos+" pontos</div></li>";
                }
              });
              tabela +="</ul></div>";
              $("#tabelaRanking").append(tabela);
              $("#tabelaRanking").trigger("create");
          });
      });
    }
  });
};
function getGroupRanking(){
  $.ajax({
    url: servidor+ranking_grupos,
    cache: false,
    beforeSend: function(){
    },
    complete: function(){
    },
    success: function(result){
      $("#tabelaGRanking").empty();
      $.each(result, function(i, turma){
         var i = 0;
         var j= 0;
         $.each(turma, function(c, cadaturma){
              i++;
              if(i%2 == 0){
                var tabela = "<div data-role='collapsible' data-collapsed-icon='carat-d' data-expanded-icon='carat-u' class='collapse-ranking'  id='collapse' data-inset='false'><h3>"+cadaturma.nome+"</h3><ul data-role='listview' class='listaRank'>";
              }else{
                var tabela = "<div data-role='collapsible' data-collapsed-icon='carat-d' data-expanded-icon='carat-u' class='collapse-ranking-imp'  id='collapse' data-inset='false'><h3>"+cadaturma.nome+"</h3><ul data-role='listview' class='listaRank'>";
              }
              //console.log(cadaturma.nome);
              $.each(cadaturma.grupos, function(x, grupo){
                j++;
                if(j%2 == 0){
                  tabela += "<li><div class='ui-grid-a'><div class='ui-block-a aluno'>"+grupo.nome+"</div> <div class='ui-block-b pts'>"+grupo.pontos+" pontos</div></li>";
                }else{
                  tabela += "<li><div class='ui-grid-a'><div class='ui-block-a aluno-imp'>"+grupo.nome+"</div> <div class='ui-block-b pts-imp'>"+grupo.pontos+" pontos</div></li>";
                }
              });
              tabela +="</ul></div>";
              $("#tabelaGRanking").append(tabela);
              $("#tabelaGRanking").trigger("create");
          });
      });
    }
  });
};
