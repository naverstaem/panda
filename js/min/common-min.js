head.ready(function(){function i(){$(".js-tabs").each(function(){var i=$(this).find('[data-target~="tab"]'),a=$(this).find('[data-item~="tab"]');i.bind("click",function(){var n=$(this).attr("href");return i.parent().removeClass("is-active"),$(this).parent().addClass("is-active"),a.removeClass("is-active"),$(n).addClass("is-active"),!1})})}function a(){$("#gallery-photo").flexslider({animation:"slide",controlNav:"thumbnails",animationLoop:!1,start:function(i){$("#gallery-photo").css("display","block")}}),$("#gallery-video").flexslider({animation:"slide",controlNav:"thumbnails",animationLoop:!1})}function n(){$("#carousel-ask").flexslider({animation:"slide",animationLoop:!1,slideshow:!1,itemWidth:380,touch:!0}),$("#carousel-reviews").flexslider({animation:"slide",animationLoop:!1,slideshow:!1,itemWidth:380,touch:!0})}function e(){var i=new ymaps.Map("map1",{center:[60.006309,30.294354],zoom:15});i.geoObjects.add(new ymaps.Placemark([60.006309,30.294354],{balloonContent:"Санкт-Петербург, Аллея Поликарпова, д.2"},{preset:"islands#icon",iconColor:"#0095b6"})).add(new ymaps.Placemark([59.929375,30.312302],{balloonContent:"Санкт-Петербург, пер. Антоненко, д.10"},{preset:"islands#icon",iconColor:"#4d7198"})).add(new ymaps.Placemark([55.782506,37.632538],{balloonContent:"Москва, ул. Гиляровского, д. 36"},{preset:"islands#icon",iconColor:"#4d7198"})).add(new ymaps.Placemark([59.947581,30.267044],{balloonContent:"10-я линия В.О., д.59"},{preset:"islands#icon",iconColor:"#4d7198"})),$("#service-addr a").click(function(){event.preventDefault();var i=$(this).attr("data-cord");$(".service__item").removeClass("is-active"),$(this).parents(".service__item").addClass("is-active")}),$("#service-addr a.spb1").click(function(){i.panTo([60.006309,30.294354],{flying:!0})}),$("#service-addr a.spb2").click(function(){i.panTo([59.929375,30.312302],{flying:!0})}),$("#service-addr a.msk1").click(function(){i.panTo([55.782506,37.632538],{flying:!0})}),$("#service-addr a.other").click(function(){i.panTo([59.947581,30.267044],{flying:!0})})}$(".fancy-form").fancybox({padding:0}),i(),a(),n(),$(".flex-control-paging").append('<li class="next"></li>').prepend('<li class="prev"></li>'),$(".flex-control-paging .next").click(function(){$(this).parent().siblings(".flex-direction-nav").find(".flex-next").trigger("click")}),$(".flex-control-paging .prev").click(function(){$(this).parent().siblings(".flex-direction-nav").find(".flex-prev").trigger("click")}),$(".col1 a").click(function(){event.preventDefault();var i=$(this).attr("href");$(this).parents(".item").removeClass("is-active"),$(i).addClass("is-active")}),ymaps.ready(e),$(window).scroll(function(){$(this).scrollTop()>770&&!$(".menu").hasClass("open")?($(".menu").addClass("open"),$(".menu").slideDown()):$(this).scrollTop()<=770&&($(".menu").removeClass("open"),$(".menu").slideUp())}),$(".menu a").on("click",function(i){i.preventDefault();var a=this.hash,n=$(a);$("html, body").stop().animate({scrollTop:n.offset().top-20},500,"swing",function(){})}),$(".menu a.tab5").click(function(){$(".tabs-nav a[href=#tab5]").trigger("click")}),$(".menu a.tab6").click(function(){$(".tabs-nav a[href=#tab6]").trigger("click")})});