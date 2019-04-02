/* global $ , window */

$(function () {
    
  'use strict';
    // Adjust Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    
    // Features-Work Shuffle 
    $('.feature-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active'); 
        if($(this).data('class') === 'all') {
            $('.shuffle-imges .col-md').css('opacity', 1);
        }else {
            $('.shuffle-imges .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
   
});

$(function(){
        $('body').scrollspy({ target: '.navbar-light' })
        $('[data-spy="scroll"]').each(function () {
});
});

$(function() {
  $('a[href^="#home"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-80
        }, 1000);
    }

});
});

$(function() {
  $('a[href^="#about"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-80
        }, 1000);
    }

});
});

$(function() {
  $('a[href^="#work"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
});

$(function() {
  $('a[href^="#blog"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-90
        }, 1000);
    }

});
});

$(function() {
  $('a[href^="#contactt"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-80
        }, 1000);
    }

});
});



