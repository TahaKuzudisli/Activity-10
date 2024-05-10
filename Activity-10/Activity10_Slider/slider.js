$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true,
        minSlides: 1,  
        maxSlides: 1,  
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,
        pager: true,
        pagerType: 'full',
        pagerSelector: '#pager'
    });
});
