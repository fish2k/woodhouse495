'use strict';

$(document).ready(function(){
  var slider = $('.header-slider');

  slider.owlCarousel({
    items: 1.3,
    loop: true,
    dots: true,
    dostEach: true,
    dotsContainer: '.count_dots',
    nav: true,
    navText: [
      '<img src="img/arl.png">',
      '<img src="img/arr.png">'
    ],
    smartSpeed: 700,
    margin: 15,
    onTranslated: function() {
      $('.count_b').text('0' + (this.items().length));
    }
  });
});