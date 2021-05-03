$(document).ready(function(){
  $("#b1").click(function(){
          //augmente la taille
            $("#div").css({'height': '70px'});
  });
  $("#b2").click(function(){
          //cache
            $("#div").hide();
  });
  $("#b3").click(function(){
            //montre
            $("#div").show();
  });
  $("#b4").click(function(){
            //change la couleur
            $("#div").css({'background-color':'blue'});
  });
  $("#b5").click(function(){
            //rechange la couleur
            $("#div").css({'background-color':'green'});
  });
});
