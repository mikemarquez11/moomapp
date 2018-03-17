/*---------------------
Iniciar WOW
_______________________*/
new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]');
/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
scroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 80, // Integer. How far to offset the scrolling anchor location in pixels
});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});


/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});