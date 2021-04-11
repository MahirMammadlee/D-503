$(function(){

    $(".main-slider").owlCarousel({
        items : 1,
        dots : true,
        loop : true,
        dotsData: true
    });

    $(".owl-dot").click(function(){
        $(".main-slider").trigger("to.owl.carousel",[$(this).index(),1000]);
    });
});
