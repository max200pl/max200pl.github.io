$(function() {
  let header = $("#header"),
    introH = $("#intro").outerHeight(),
    scrollOffset = $(window).scrollTop(),
    headerH = $("#header__inner").outerHeight();
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    scrollOffset = scrollOffset;
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    let offsetIntro = introH - headerH;
    if (scrollOffset >= offsetIntro) {
      header.addClass("fixed");
      $("#header__inner").addClass("bgColor");
    } else {
      header.removeClass("fixed");
      $("#header__inner").removeClass("bgColor");
    }
  }

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top - headerH;
    console.log(blockOffset);

    $("html, body").animate(
      {
        scrollTop: blockOffset
      },
      600
    );
  });

  $("#nav__toggle").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav__list").toggleClass("show");
  });

  $("#nav__menu").on("click", function(event) {
    event.preventDefault();
    $("#nav__toggle").toggleClass("active");
    $("#nav__list").toggleClass("show");
  });
});
