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
        pager: false,  // Varsayılan pager'ı devre dışı bırak
        onSliderLoad: function(currentIndex) {
            updatePagerText(currentIndex + 1);  // Slider yüklendiğinde pager metnini güncelle
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            updatePagerText(newIndex + 1);  // Her slayt geçişinden sonra pager metnini güncelle
        }
    });

    function updatePagerText(currentIndex) {
        var totalSlides = slider.getSlideCount();
        $('#pager').text(currentIndex + ' / ' + totalSlides);  // Özel formatınız
    }
});
