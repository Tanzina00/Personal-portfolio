//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-default").css("background-color","#ffffff");
        $(".navbar-default .navbar-nav>li>a").css("color","rgb(117, 7, 72)");
        $(".navbar-default .navbar-nav>li>a").hover(function(){
            $(this).css("color","#afaf9b"); 
            }, function(){
        $(this).css("color", "rgb(117, 7, 72)");
        });
        $(".navbar-default .navbar-nav>.social>a").hover(function(){
            $(this).css("color","rgb(117, 7, 72)"); 
            }, function(){
        $(this).css("color", "rgb(117, 7, 72)");
        });

        } 
    else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-default").css("background-color","transparent");
        $(".navbar-default .navbar-nav>li>a").css("color","#ffffff");
         $(".navbar-default .navbar-nav>.social>a").css("color","#750748");
         $(".navbar-default .navbar-nav>li>a").hover(function(){
            $(this).css("color","#afaf9b"); 
            }, function(){
        $(this).css("color", "#ffffff");
        });
                  $(".navbar-default .navbar-nav>.social>a").hover(function(){
            $(this).css("color","rgb(117, 7, 72)"); 
            }, function(){
        $(this).css("color", "rgb(117, 7, 72)");
        });
          $(".navbar-default .navbar-nav>.active>a").css("color","#afaf9b");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
