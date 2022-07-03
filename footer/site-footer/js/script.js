// CAROUSEL script

$(document).ready(function() {

    // Responsive tablet rule
    if ($(window).width() <= 1150) {
        console.log("tablet mode");
    } else {
        console.log("desktop mode");
    }

    // Carousel Header part

    $(".carousel").carousel({
        interval: 90000 * 8,
        // interval: 1000 * 8,
        // interval: false,
        pause: true,
        // pause: false,
        touch: true
    });

    $(".carousel .carousel-inner").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            this.parent().carousel("next");
        },
        swipeRight: function() {
            this.parent().carousel("prev");
        },
        threshold: 0,
        tap: function(event, target) {
            window.location = $(this).find(".carousel-item.active a").attr("href");
        },
        //excludedElements: "label, button, input, select, textarea, .noSwipe"
    });

    $(".carousel .carousel-control-prev").on("click", function() {
        $(".carousel").carousel("prev");
    });

    $(".carousel .carousel-control-next").on("click", function() {
        $(".carousel").carousel("next");
    });
    // Center text part from container size
    let carousel_box = $(".container");
    $.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", (carousel_box.height() - this.height()) / 1.6 + "px");
        return this;
    }
    $.fn.center_mobile = function() {
        this.css("position", "absolute");
        this.css("top", (carousel_box.height() - this.height()) / 2.8 + "px");
        return this;
    }
    $('.carousel-caption').center();
    $(window).resize(function() {
        $('.carousel-caption').center();
        // center text part for mobile device
        if ($(window).width() <= 400) {
            //console.log('vs mobile');
            $('.carousel-caption').center_mobile();
        } else {
            //console.log('vs desktop');
        }
    });

}); // end of jQuery ready function