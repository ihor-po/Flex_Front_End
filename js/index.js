$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    });

    $(".header-content__menu").click(function () {

        if ($(".header-nav").is(":hidden"))
        {
            $(".header-nav").show(100);
        }
        else
        {
            $(".header-nav").hide(100);
        }

    })
});