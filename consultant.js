
///////Scroll Effects///////


$(document).ready(function () {

    //  show / hide button

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $('.scrollTop').fadeIn();

        } else {

            $('.scrollTop').fadeOut();
        }

    });

    //  Smooth Scrolling to Top

    $('.scrollTop').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });


    //  Smooth Scroll Down

    $('a[href*="#"]').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);

    });

});



//////////Scrollreveal//////////

const sr = ScrollReveal();

sr.reveal('#about-1', {

    origin: 'top',
    distance: '50px',
    duration: 2000,
    scale: 0.5

});


sr.reveal('#about-2', {

    origin: 'right',
    distance: '150px',
    duration: 2500,
    scale: 0.5

});

sr.reveal('#about-3', {

    origin: 'right',
    distance: '150px',
    duration: 3500,
    scale: 0.5

});

sr.reveal('#about-4', {

    origin: 'right',
    distance: '150px',
    duration: 4500,
    scale: 0.5

});

sr.reveal('#about-5', {

    origin: 'right',
    distance: '150px',
    duration: 5500,
    scale: 0.5

});






////////Hide Navigation Non Scroll////////////

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {

        document.querySelector(".navbar").style.top = "0";

    } else {

        document.querySelector(".navbar").style.top = "-60px";
    }

    prevScrollpos = currentScrollPos;
}

