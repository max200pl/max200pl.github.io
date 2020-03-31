$(function () {

    /* Scroll offset ==============*/
    $('.nav a[href^="#"]').click(function () {
        let offset = $(".header").innerHeight();
        let target = $(this).attr('href');

        if ($(window).width() >= 760) { // больше 760 
            $('html, body').animate({
                scrollTop: $(target).offset().top - offset
            }, 500);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 30
            }, 500);
            return false;
        }
    });

    /* Scroll down ==============*/

    $(document).ready(function () {

        $(window).scroll(function () {
            //Определяет положение полосы прокрутки и если ниже 100px, то появляется кнопка.
            if ($(this).scrollTop() > 600) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function () {
            //Есть еще два значения:
            //0 - страница будет прокручена до самого налача
            //600 - скорость анимации прокрутки
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
        });

    });

    /* Filter works=====================*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data("filter");

        if (cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {  // перебераем все data-cat через функцию .each
                let workCat = $(this).data("cat");

                if (workCat != cat) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });

    /* Mobli nav ========================*/
    const nav = $("#nav");

    $("#navToggle").on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /*Accordeon modal-resume========================*/

    $('.experince__typePage').click(function () {
        if ($(window).width() < 760) { //при расширении меньше 760
            $(this).toggleClass('in').next().slideToggle(); //при нажатии переключем .in и следюющи класс скраваем или показываем 
            $('.experince__typePage').not(this).removeClass('in').next().slideUp(); // у всех остольных удаляем класс .in и подымаем слайдер в верх
        }
    });

    $(window).resize(function () { // при изменении ширины экрана 
        if ($(window).width() >= 760) { // больше 760 
            $('.experince__typePage').removeClass('in'); // удаляем класс in
            $('.experince__summary').slideDown(); //  опускаем слайдеры
        } else {
            $('.experince__summary').slideUp(); // иначе подымаем слайдеры
        }
    });
});