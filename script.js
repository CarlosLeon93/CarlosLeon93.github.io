//alert("La resolucion de la pantalla es" + screen.width + "x" + screen.height)
function myFunction() {
    window.alert("-More information: +46736914525")
}

$(document).ready(main);

var contador = true;

function main() {

    $('.slogan').animate({ bottom: '40%', opacity: '0.95' }, 2000);

    /*const mediumBp = matchMedia('(min-width: 600px)');
    const changeSize = mql => {

        mql.matches ?
            $('nav').animate({ left: '0%' }) :
            $('nav').animate({ left: '-100%' })

    }
    mediumBp.addListener(changeSize);
    changeSize(mediumBp);*/

    $('.bars').click(function() {
        //$('nav').toggle();

        if (contador == true) {

            $('.nav2').animate({
                left: '0%'
            });
            contador = false;

        } else {
            $('.nav2').animate({
                left: '-100%'
            });
            contador = true;
        }
    });

    $('.ghost').click(function() {

        $('.nav2').animate({
            left: '-100%'
        });
        contador = true;

    });
    $('.home').click(function() {

        $('.nav2').animate({
            left: '-100%'
        });
        contador = true;

    });

    /*window.onscroll = function() {
        $('nav').animate({
            left: '-100%'
        });
        contador = true;

    };*/
    /*$(document).addEventListener('scroll', function() {
        $('nav').animate({
            left: '-100%'
        });
        contador = true;
    });*/

}