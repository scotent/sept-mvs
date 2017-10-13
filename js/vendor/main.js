console.log('main.js loaded');


// Function to create Responsive Sticky Footer //
$(document).ready(function () {
    $(window).resize(function () {
        var footerHeight = ($('.footer').outerHeight());
        var stickFooterPush = $('.push').height(footerHeight);

        $('.content-wrapper').css({'marginBottom': '-' + footerHeight + 'px'});
    });

    $(window).resize();
});


// Function to make targeted elements equal height //
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
});

// Trigger on window resize //
$(window).resize(function(){
    equalheight('.portal-panel .panel-inner');
});