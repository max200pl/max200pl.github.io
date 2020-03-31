 /* Slider: https://kenwheeler.github.io/slick/ ===========*/

 const worksSlider = $('[data-slider="slick"]');

 worksSlider.slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           fade: true,
           arrows: false,
           dots: true // добовление точек
      }

 );

 $(".slickPrev").on("click", function (event) {
           event.preventDefault();

           let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

           currentSlider.slick("slickPrev");
      }

 );

 $(".slickNext").on("click", function (event) {
           event.preventDefault();

           let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

           currentSlider.slick("slickNext");
      }

 );