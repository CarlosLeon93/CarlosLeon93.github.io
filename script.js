//alert("La resolucion de la pantalla es" + screen.width + "x" + screen.height)
function myFunction() {
    window.alert("-More information: +46736914525")
}

$(document).ready(main);

var contador = true;

function main() {

    const mediumBp = matchMedia('(min-width: 600px)');
    const changeSize = mql => {

        mql.matches ?
            $('nav').animate({ left: '0%' }) :
            $('nav').animate({ left: '-100%' })

    }
    mediumBp.addListener(changeSize);

    $('.bars').click(function() {
        //$('nav').toggle();

        if (contador == true) {

            $('nav').animate({
                left: '0%'
            });
            contador = false;

        } else {
            $('nav').animate({
                left: '-100%'
            });
            contador = true;
        }
    });
    $(document).scroll(function() {
        $('nav').animate({
            left: '-100%'
        });
        contador = true;
    });
    /*$(document).addEventListener('scroll', function() {
        $('nav').animate({
            left: '-100%'
        });
        contador = true;
    });*/

}