// Carousel Header part
$(document).ready(function() {

    $(".carousel").carousel({
        //interval: false,
        interval: 1000 * 8,
        pause: false,
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

});

// Change Carousel paragraph text
var element = document.getElementsById("carousel-tagline");
element.classList.remove("font-weight-bold");