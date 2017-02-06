var preTop = $(window).scrollTop();
var $header = $('.scroll');

var addTimeout, removeTimeout;

$(window).scroll(function($e){
    var curTop = $(window).scrollTop();
    if(curTop > preTop){
        $header.addClass('hide-header');
    }else{
        $header.removeClass('hide-header');
    }
    preTop = curTop;
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});


if($('.wrapper--grid').length>0) {
    var $grid = $('.wrapper--grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        stamp: '.stamp'
    });

// layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
}



/*document.addEventListener('mousemove', function(e){
    var transX = $(window).width()/2,
        transY = $(window).height()/2;
    $(this).find(".transform-layout").attr(
        "style",
        "transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/92009+"deg);" +
        "-moz-transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/200+"deg);" +
        "-webkit-transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/200+"deg);"
    ),
    $(this).find(".transform-layout .index__heading").attr(
        "style",
        "transform:translateY("+(e.pageX - transX)/100+"deg) rotateX("+ (e.pageY - transY)/100+"deg);" +
        "-moz-transform:rotateY("+(e.pageX - transX)/100+"deg) rotateX("+ (e.pageY - transY)/100+"deg);" +
        "-webkit-transform:rotateY("+(e.pageX - transX)/100+"deg) rotateX("+ (e.pageY - transY)/100+"deg);"
    ),
    $(this).find(".article-card .link-to-article").attr(
        "style",
        "background: linear-gradient("+(e.pageX - transX)/5+"deg, rgba(255,255,255,.15) 0%, rgba(255,255,255,0) 75%);"+
        "transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/150+"deg);" +
        "-moz-transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/150+"deg);" +
        "-webkit-transform:rotateY("+(e.pageX - transX)/200+"deg) rotateX("+ (e.pageY - transY)/150+"deg);"
    )
});*/

/*
$(".article-card").on('mousemove',function(e){
    var transX = $(this).width()/2,
        transY = $(this).height()/ 2;
    //var x = e.clientX;
    var x = $(this).offset().left + $(this).width() - e.clientX;
    var y = e.clientY;

    $('.transform-layout',$(this)).attr(
        "style",
        "transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);" +
        "-moz-transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);" +
        "-webkit-transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);"
    );
    $('.link-to-article',$(this)).attr(
        "style",
        "background: linear-gradient("+(x - transX)/10+"deg, rgba(255,255,255,.25) 0%, rgba(255,255,255,0) 60%);"+
        "transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);" +
        "-moz-transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);" +
        "-webkit-transform:rotateY("+(x - transX)/50+"deg) rotateX("+ (y - transY)/100+"deg);"
    );
});

$(".article-card").on('mouseout',function(e){

    $('.transform-layout',$(this)).attr(
        "style",
        "transform:rotateY(0) rotateX(0);" +
        "-moz-transform:rotateY(0) rotateX(0);" +
        "-webkit-transform:rotateY(0) rotateX(0);"
    );
    $('.link-to-article',$(this)).attr(
        "style",

        "transform:rotateY(0) rotateX(0);" +
        "-moz-transform:rotateY(0) rotateX(0);" +
        "-webkit-transform:rotateY(0) rotateX(0);"
    );
});*/

$('.submit-button').on('click', function(e) {
    $(this).addClass('done-subscribe');
    e.preventDefault();
});