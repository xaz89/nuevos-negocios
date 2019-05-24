/* $('#alta').hover(function () {

    $('.color div:first').addClass('hover azul').fadeIn(300);
}); */





$(".nav-item").hover(function () {
    var valor = $(this).val();
    console.log(valor);
    var clase = '';
    switch(valor){
        case 1:
            clase = 'azul';
        break;
        case 2:
            clase = 'rosa';
        break;
        case 3:
            clase = 'amarillo';
        break;
        case 4:
            clase = 'verde';
        break;


        default:
            clase = ' ';
        break;
    } 
    $('.color div:first').addClass('hover '+clase).fadeIn(300);
    // $('.todo').addClass('d-none').fadeIn(300);   

}).mouseleave(function () {
    $(".color div:first").removeAttr('class');
    /* $('.todo').removeClass('d-none').fadeIn(300); */
});

















/////// NAVBAR ///////
$(window).scroll(function () {
    if ($(document).scrollTop() > 30) {
        $('.navbar').addClass('shrink');
    } else {
        $('.navbar').removeClass('shrink');
    }
});


/////// SIDEBAR ///////

/* function mostrar() {
    document.getElementById("sidebar").style.width = "14rem";
    document.getElementById("sidebar").classList.add("sombra");
    document.getElementById("contenido").style.marginLeft = "14rem";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").classList.remove("sombra");
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
}

 */
/////// SIDEBAR ADMIN ///////

/*
var mediaquery = window.matchMedia("(max-width: 1280px)");
if (mediaquery.matches) {
   // mediaquery es 600

function mostrarAdmin() {
    document.getElementById("sidebarAdmin").style.width = "14rem";
    document.getElementById("sidebarAdmin").classList.add("sombra");
    document.getElementById("contenidoAdmin").style.marginLeft = "14rem";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
}

function ocultarAdmin() {
    document.getElementById("sidebarAdmin").style.width = "0rem";
    document.getElementById("sidebarAdmin").classList.remove("sombra");
    document.getElementById("contenidoAdmin").style.marginLeft = "0rem";
    document.getElementById("abrir").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
}
} else {
  // mediaquery no es 600


  function mostrarAdmin() {
    document.getElementById("sidebarAdmin").style.width = "14rem";
    document.getElementById("sidebarAdmin").classList.add("sombra");
    document.getElementById("contenidoAdmin").style.marginLeft = "14rem";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
}

function ocultarAdmin() {
    document.getElementById("sidebarAdmin").style.width = "5.5rem";
    document.getElementById("sidebarAdmin").classList.remove("sombra");
    document.getElementById("contenidoAdmin").style.marginLeft = "5.5rem";
    document.getElementById("abrir").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
}



}


 ////// INICIAR ANIMACIONES A PARTIR DE ELEMENTOS SCROLL //////
        $(document).ready(function () {
            var animarScroll = jQuery('.card-deck');
            if (animarScroll.length > 0) {
                $('.card-deck').waypoint(function () {
                    $('.card-deck').addClass('animated fadeInLeft');
                }, {
                        offset: '10%'

                    });
            }
        });



 ////// SUSPENSIVOS //////
        $(document).ready(function() {
            $(".suspensivos").dotdotdot({
                height: 10,
                fallbackToLetter: true,
                watch: true,
            });
        });





 ////// OVERLAY //////

        var sizeTheOverlays = function() {
            $(".overlay").resize().each(function() {
            var h = $(this).parent().outerHeight(true);
            var w = $(this).parent().outerWidth(true);
            $(this).css("height", h);
            $(this).css("width", w);
          });
        };

        sizeTheOverlays();


        var width = $(window).width();
        $(window).resize(function(){
           if($(this).width() != width){
              width = $(this).width();
              sizeTheOverlays();
           }
        });


 ////// BARRA DE DESPLAZAMIENTO //////
        (function($){
            $(window).on("load",function(){
                $(".sidebar").mCustomScrollbar();
            });
        })(jQuery);


     */