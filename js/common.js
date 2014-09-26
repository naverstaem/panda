head.ready(function() {

    $('.fancy-form').fancybox({
        padding: 0
    });

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

    function gallerySliderStart(){
        $('#gallery-photo').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            animationLoop: false,
            start: function( slider ){

                $('#gallery-photo').css( 'display', 'block' );

            }
        });

        $('#gallery-video').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            animationLoop: false
        });
    } gallerySliderStart();

    function carouselSliderStart(){
        $('#carousel-ask').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            itemWidth: 380,
            touch: true
        });

        $('#carousel-reviews').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            itemWidth: 380,
            touch: true
        });
    } carouselSliderStart();




    $('.flex-control-paging').append('<li class="next"></li>').prepend('<li class="prev"></li>');
    $('.flex-control-paging .next').click(function(){
        $(this).parent().siblings('.flex-direction-nav').find('.flex-next').trigger('click');
    });
    $('.flex-control-paging .prev').click(function(){
        $(this).parent().siblings('.flex-direction-nav').find('.flex-prev').trigger('click');
    });

    $('.col1 a').click(function(){
        event.preventDefault();
        var elId = $(this).attr('href');
        $(this).parents('.item').removeClass('is-active');
        $(elId).addClass('is-active');
    });


    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map1", {
                center: [60.006309, 30.294354],
                zoom: 15
            });

        myMap.geoObjects
            .add(new ymaps.Placemark([60.006309, 30.294354], {
                balloonContent: 'Санкт-Петербург, Аллея Поликарпова, д.2'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            .add(new ymaps.Placemark([59.929375, 30.312302], {
                balloonContent: 'Санкт-Петербург, пер. Антоненко, д.10'
            }, {
                preset: 'islands#icon',
                iconColor: '#4d7198'
            }))
            .add(new ymaps.Placemark([55.782506, 37.632538], {
                balloonContent: 'Москва, ул. Гиляровского, д. 36'
            }, {
                preset: 'islands#icon',
                iconColor: '#4d7198'
            }))
            .add(new ymaps.Placemark([55.782506, 37.632538], {
                balloonContent: '10-я линия В.О., д.59'
            }, {
                preset: 'islands#icon',
                iconColor: '#4d7198'
            }));


        $('#service-addr a').click(function(){
            event.preventDefault();

            //var dataAddr = $(this).attr('data-addr');
            var dataCord = $(this).attr('data-cord');

            $('.service__item').removeClass('is-active');
            $(this).parents('.service__item').addClass('is-active');
        });

        $('#service-addr a.spb1').click(function(){
            myMap.panTo([60.006309, 30.294354], {flying: true});
        });
        $('#service-addr a.spb2').click(function(){
            myMap.panTo([59.929375, 30.312302], {flying: true});
        });

        $('#service-addr a.msk1').click(function(){
            myMap.panTo([55.782506, 37.632538], {flying: true});
        });


    }

    $(window).scroll(function () {
        if ( $(this).scrollTop() > 770 && !$('.menu').hasClass('open') ) {
            $('.menu').addClass('open');
            $('.menu').slideDown();
        } else if ( $(this).scrollTop() <= 770 ) {
            $('.menu').removeClass('open');
            $('.menu').slideUp();
        }
    });

    $('.menu a').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 20
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });

    });

    $('.menu a.tab5').click(function(){
        $(".tabs-nav a[href=#tab5]").trigger('click');
    })
    $('.menu a.tab6').click(function(){
        $(".tabs-nav a[href=#tab6]").trigger('click');
    })






});