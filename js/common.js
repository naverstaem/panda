head.ready(function() {

    function tabs() {
        $(".js-tabs").each(function(){
            var target = $(this).find('[data-target~="tab"]'),
                el = $(this).find('[data-item~="tab"]');
            target.bind("click", function() {
                var index = $(this).attr("href");
                target.parent().removeClass("is-active");
                $(this).parent().addClass("is-active");
                el.removeClass('is-active');
                $(index).addClass('is-active');
                return false;
            });
        });
    } tabs();

    $('#gallery').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        animationLoop: false
    });

    $('#carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5
    });

});