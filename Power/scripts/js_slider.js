/*-------------slider 1--------------*/

const worksSlider = $('[data-slider="sl"]');

worksSlider.slick({

    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',

    arrows: false,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 998,
            settings: {
                centerMode: false,
                slidesToShow: 2

            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]

});


/*Button slider*/

$(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.classes').find('[data-slider="sl"]');

    currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.classes').find('[data-slider="sl"]');

    currentSlider.slick("slickNext");
});

/*Bg slider*/

/*--------------/slider 1--------------*/

/*-------------slider 2 --------------*/

const worksSliderTwo = $('[data-slider="sl2"]');

worksSliderTwo.slick({

    slidesToShow: 3,
    arrows: false,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

/*Button slider*/

$(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.reviews').find('[data-slider="sl2"]');

    currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.reviews').find('[data-slider="sl2"]');

    currentSlider.slick("slickNext");
});

/*Bg slider*/

/*--------------/slider--------------*/