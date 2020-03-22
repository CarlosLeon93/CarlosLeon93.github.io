//alert("La resolucion de la pantalla es" + screen.width + "x" + screen.height)
function myFunction() {
    window.alert("-More information: +46736914525")
}

$(document).ready(main);

var contador = true;

function main() {

    $('.slogan').animate({ bottom: '40%', opacity: '0.95' }, 2000);

    $('.bars').click(function() {

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
    const floatButton = document.getElementById('float-button'),
        circularMenu = document.getElementById('circular-menu');

    floatButton.addEventListener('click', () => {
        floatButton.classList.toggle('pulsed');
        circularMenu.classList.toggle('expand');
    })
}