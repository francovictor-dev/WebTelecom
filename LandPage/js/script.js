///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 500) {

        $('#navbar_top').addClass("fixed-top");
        $('#navbar_top').hide().fadeIn();
        $('.menu object').css('margin','-2px 0 10px 18px');
        $('.menu object').css('display','block');
        
        // add padding top to show content behind navbar
        //$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        $('.menu').css('width', '100%');
        $('.menu').css('height', '70px');
        $('.menu').css('background-color', '#D8D8D6');
        $('.menu ul li a').css('color', '#590000');  
      }else{

        $('#navbar_top').removeClass("fixed-top");
        $('.menu').css('margin-left', '0');
        $('.menu').css('width', '62%');
        $('.menu').css('background-color', 'transparent');
        $('.menu object').css('display','none');
        $('.menu ul li a').css('color', 'white');
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
} // end if


//Header Animação Imagem
$(document).ready(function(){
  $(".botao").fadeIn();
});

$(document).ready(function(){
  $(".text1").fadeIn(1800);

  $(".moca").animate({
    left: '4%',
    opacity: 1
  }, 1000, function(){
    $("header .wifi").fadeIn(1000);
  });

});

//show Quem Somos

   $(window).scroll(function(){ 
     if ($(this).scrollTop() > 250 && $(this).scrollTop() < 1000) {
      $('.quem-somos .row').fadeIn();
     }else{
      $('.quem-somos .row').fadeOut();
     }
  });


//show planos
if ($(window).width() > 992) {
  $(window).scroll(function(){ 
     if ($(this).scrollTop() > 1000) {
      $('.plano-unit').fadeIn();
     }else{
      $('.plano-unit').fadeOut();

     }
  });
}

if ($(window).width() < 758){
  $(window).scroll(function(){ 
     if ($(this).scrollTop() > 1100) {
        $('.plano-unit').fadeIn();
     }else{
        $('.plano-unit').fadeOut();
     }
  });
}

//animação dos planos individuais
//plano 1
if ($(window).width() > 758){
  $(".unit-1").mouseenter(function(){
    $(".unit-1 .footer").animate({zoom: 1.2});
  });
  $(".unit-1").mouseleave(function(){
    $(".unit-1 .footer").animate({zoom: 1});
  }); 
//plano 2
  $(".unit-2").mouseenter(function(){
    $(".unit-2 .footer").animate({zoom: 1.2});
  });
  $(".unit-2").mouseleave(function(){
    $(".unit-2 .footer").animate({zoom: 1});
  }); 
//plano 3
  $(".unit-3").mouseenter(function(){
    $(".unit-3 .footer").animate({zoom: 1.2});
  });
  $(".unit-3").mouseleave(function(){
    $(".unit-3 .footer").animate({zoom: 1});
  }); 
//plano 4
  $(".unit-4").mouseenter(function(){
    $(".unit-4 .footer").animate({zoom: 1.2});
  });
  $(".unit-4").mouseleave(function(){
    $(".unit-4 .footer").animate({zoom: 1});
  }); 
}


//show disponibilidade
if ($(window).width() > 580) {
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 2150) {
        $('.caixa').fadeIn();
      }else{
        $('.caixa').fadeOut();
      }
  });
}

//show contato
if ($(window).width() > 992) {
  $(window).scroll(function(){ 
     if ($(this).scrollTop() > 2800) {
      $('.contato .row').fadeIn();
     }else{
      $('.contato .row').fadeOut();
     }
  });
}
/*
$(document).ready(function(){
  $(".icone-mobile").click(function(){
    $(".nav-mobile").hide();
  });
  $(".icone-mobile").click(function(){
    $(".nav-mobile").show();
  });
});
*/
$(document).ready(function(){
  $(".icone-mobile").click(function(){
    //alert($('.planos').height());
    //alert($(window).scroll().scrollTop());
    $(".nav-mobile").slideToggle("slow");
  });
});