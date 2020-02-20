$(document).ready(function() {

    //BANNER TOPO
    $(".banner-principal-container").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        speed: 300,
        adaptiveHeight: true
    });


    $(".grade1").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img1 img1 img1 img2 img3''img4 img4 img5 img5 img6 img6'"
        });
    });
    $(".grade2").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img2 img2 img2 img2 img3''img4 img4 img5 img5 img6 img6'"
        });
    });
    $(".grade3").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img2 img3 img3 img3 img3''img4 img4 img5 img5 img6 img6'"
        });
    });
    $(".grade4").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img1 img2 img2 img3 img3''img4 img4 img4 img4 img5 img6'"
        });
    });
    $(".grade5").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img1 img2 img2 img3 img3''img4 img5 img5 img5 img5 img6'"
        });
    });
    $(".grade6").mouseenter(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img1 img2 img2 img3 img3''img4 img5 img6 img6 img6 img6'"
        });
    });
    $(".main-instalations").mouseout(function() {
        $(".main-instalations").css({
            "grid-template-areas": "'img1 img1 img2 img2 img3 img3''img4 img4 img5 img5 img6 img6'"
        });
    });

    $(".banner-link").click(function(e) {
        e.preventDefault();
        $(".banner-link").hide();
        $(".banner-principal-container .slick-dots").css("opacity", "1");
        $(".menu-banner-principal").fadeIn();
    });

    $(".banner-home-menu").click(function(e) {
        e.preventDefault();
        $(".banner-home-menu").removeClass("background");
        $(this).toggleClass("background");
        $(".banner-home-submenu").hide();
        $(this.hash).slideToggle();
    });

});

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 150) {
        $(".club-name-container").hide();
    } else {
        $(".club-name-container").slideDown();
    }
});


var banner;

$(document).ready(function() {

    $(".banner-3d-img-container").each(function(img) {
        $(this).attr("data-slider", img);

        $(this).addClass("slide-" + img);

        banner = img;

        img = img + 1;



    });

});




function passaBanner() {
    $(".banner-3d-img-container").each(function() {
        var att = parseInt($(this).attr("data-slider"));
        var attplus = att + 1;
        if (attplus > banner) {
            attplus = 0;
        }
        $(this).attr("data-slider", attplus);
    });
    reorganizaBanner();
}

function reorganizaBanner() {
    $(".banner-3d-img-container").each(function() {
        var slider = $(this).attr("data-slider");
        $(this).removeClass();
        $(this).addClass("banner-3d-img-container banner-3d-img-1");
        $(this).addClass("slide-" + slider);
    });
}

setInterval(() => {
    passaBanner();
}, 3000);