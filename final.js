$(document).ready(function(){
    $('.property-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow : $('.prev'),
        nextArrow : $('.next'),
      });
    $('.section-clients').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow : $('.left-btn'),
        nextArrow : $('.right-btn'),
      });
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 50) {
            $(".hidden").removeClass("hidden");
        }
        else {
            $(".nav-2").addClass("hidden")
        }
    })
  });