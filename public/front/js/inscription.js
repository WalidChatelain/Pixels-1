$(document).ready(function(){
    var current = 1;
    
    widget      = $(".step");
    btnnext     = $(".next");
    btnback     = $(".back"); 
    btnsubmit   = $(".submit");

    widget.not(':eq(0)').hide();
    hideButtons(current);
    setProgress(current);

    // Bouton suivant
    btnnext.click(function(){
      if(current < widget.length){
        // Validation
        if($(".form").valid()){
          widget.show();
          widget.not(':eq('+(current++)+')').hide();
          setProgress(current);
        }
      }
      hideButtons(current);
    })

    // Bouton retour
    btnback.click(function(){
      if(current > 1){
        current = current - 2;
        if(current < widget.length){
          widget.show();
          widget.not(':eq('+(current++)+')').hide();
          setProgress(current);
        }
      }
      hideButtons(current);
    })

      $('.form').validate({
      ignore:":not(:visible)",      
      rules: {
        country  : "required",
        username : "required",
        password : "required",
        rpassword: { required : true, equalTo: "#password"},
      },
      });

      $('.submit').click(function(){
        window.location.href='index.html';
      })

  });

  // Barre de progression
  setProgress = function(currstep){
    var percent = parseFloat(100 / widget.length) * currstep;
    percent = percent.toFixed();
    $(".progress-bar").css("width",percent+"%").html(percent+"%");    
  }

  // Gestion des boutons selon étape
  hideButtons = function(current){
    var limit = parseInt(widget.length); 

    $(".action").hide();

    if(current < limit) btnnext.show();
    if(current > 1) btnback.show();
    if (current == limit) { 

      $(".display label:not(.control-label)").each(function(){
        console.log($(this).find("label:not(.control-label)").html($("#"+$(this).data("id")).val())); 
      });
      btnnext.hide(); 
      btnsubmit.show();
    }
  }

