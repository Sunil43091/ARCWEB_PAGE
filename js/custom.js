$(function () {
	var filterList = {
		init: function () {
			$('#gallery').mixItUp({
				selectors: {
  			  target: '.gallery-item',
  			  filter: '.filter'
  		  },
  		  load: {
    		  filter: '.print, .strategy, .logo, .web'
    		}
			});
		}
	};
	filterList.init();
});

var swiper = new Swiper(".projectSlider", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
    });


    var swiper = new Swiper(".slider2", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
    });
