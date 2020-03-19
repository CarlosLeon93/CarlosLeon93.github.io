//alert("La resolucion de la pantalla es" + screen.width + "x" + screen.height)
function myFunction() {
    window.alert("-More information: +46736914525")
}

$(document).ready(main);

var contador = true;
var userHasScrolled = false;

function main() {

    $('.bars').click(function() {
        //$('nav').toggle();
        window.onscroll = function() {
            userHasScrolled = true;
        }
        if (contador == true) {

            $('nav').animate({
                left: '0%'
            });
            contador = false;


        } else if (contador == false && userHasScrolled == true) {

            $('nav').animate({
                left: '-100%'
            });
            contador = true;
            userHasScrolled = false;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            contador = true;
        }

    });
}