/*global $, jquery, alert */

$(document).ready(function () {
    "use strict";
    //$("html").niceScroll();

//carousal Time
    $('.carousel').carousel({
    
        interval: 5000
    
    });

// Show color box when click on the Gear
    $('.gear-check').click(function () {
    
        $('.color-box').fadeToggle();
    });


     // Change Theme color

    var colorLi = $('.color-box ul li'),
        scrollButton = $("#scroll-up");

    colorLi
        .eq(0).css("backgroundColor", "#1D9F75").end()
        .eq(1).css("backgroundColor", "#D075EC").end()
        .eq(2).css("backgroundColor", "#7484FF");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });


//Scroll up

    $(window).scroll(function () {
    //show Button
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    //click on the Button
    
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

//loading
    $(window).load(function () { 
        $(".loading-overlay .spinner").fadeOut(500,
                                     function () {
                $("body").css("overflow", "auto");
                $(this).parent().fadeOut(500,
                                function () {
                        $(this).remove();
                    });
            });
    
    });
});
