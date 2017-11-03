console.log('main.js loaded');


// -- Responsive Sticky header -- //

// cache the elements
var $navBar = $('nav.navbar');
var $siteHeader = $('header.site-header');

// find original navigation bar position
var navPos = $navBar.offset().top;

$(document).ready(function() {
    var s1 = $($navBar).height();
    var s2 = $($siteHeader).height();

    if (s1 != s2) {
        $($siteHeader).css('height', s1 + "px");
    }
});

// on resize
$(window).resize(function(){
    var s1 = $($navBar).height();
    var s2 = $($siteHeader).height();

    if (s1 != s2) {
        $($siteHeader).css('height', s1 + "px");
    }
});

// on scroll
$(window).scroll(function() {
    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
    } else {
        $navBar.removeClass('fixed');
    }
});


// -- Responsive Sticky Footer -- //

$(document).ready(function () {
    $(window).resize(function () {
        var footerHeight = ($('.footer').outerHeight());
        var stickFooterPush = $('.push').height(footerHeight);

        $('.content-wrapper').css({'marginBottom': '-' + footerHeight + 'px'});
    });
    $(window).resize();
});


// -- Make targeted elements equal height -- //

equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

// Trigger on window load //
$(window).load(function() {
    equalheight('.portal-panel .panel-inner');
    equalheight('.contact-panel');
});

// Trigger on window resize //
$(window).resize(function(){
    equalheight('.portal-panel .panel-inner');
    equalheight('.contact-panel');
});
