$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout:3500,
        video: true,
        videoWidth: false,
        videoHeight: false,
        center:true,
        lazyLoad: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 2
            }
        }

    });

    var owl = $('.owl-carousel');

    $('.owl-next').click(function(){
        owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $(window).resize(function () {
        $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();
    });

    $('select').styler();

    var inputList = $('form .checkbox');
    for (var i = inputList.length - 1; i >= 0; i--) {
        $(inputList[i]).prettyCheckable({

        });
    }

    $('.sub-menu').hide().css({
        zIndex: 10
    });
    $('.menu-item').hover(function() {
        $(this).find('.sub-menu').slideDown().fadeIn(300);
    }, function() {
        $('.sub-menu').stop(true).slideUp();
    });

    $('.djm-menu').hide();
    //    .css({
    //    left: 0,
    //    zIndex: 5,
    //    opacity: 0
    //});
    $('.djm').hover(function() {
        $(this).find('.djm-menu').slideDown();
        //    .animate({
        //    left: '280',
        //    opacity: 1
        //});
    }, function() {
        $('.djm-menu').stop(true).slideUp();
        //    .animate({
        //    left: "0",
        //    opacity: 0
        //});
    })
});
