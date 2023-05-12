var botonArriba = document.querySelector('.botonVolver');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) { 
    botonArriba.style.display = 'block';
  } else {
    botonArriba.style.display = 'none';
  }
});

/* FrancoR: agregue algo con JQuery */
$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  });

