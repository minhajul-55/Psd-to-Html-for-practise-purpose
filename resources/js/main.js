$(document).ready(function (){
    var mixer = mixitup('.minhaj')
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:35,
        loop:true,
        responsive:true,
        responsiveRefreshRate:true,
        responsive:{
            0:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            },
        }
    });
})

$(document).ready(function(){
    $('.owl-carousel.plugin').owlCarousel({
        margin:35,
        loop:true,
        responsive:true,
        responsiveRefreshRate:true,
        responsive:{
            0:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            },
        }
    });
})