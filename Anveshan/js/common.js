$(function(){
	let header = $("#header"),
	   	 introH = $("#intro").innerHeight(),
	   	 scrollOffset = $(window).scrollTop(),
	   	 headerH = $("#header").innerHeight();
	       checkScroll(scrollOffset);

	      		
	      $(window).on("scroll",function(){
	      	scrollOffset = $(this).scrollTop();
	      	scrollOffset = scrollOffset+headerH; 
	      	checkScroll(scrollOffset);
	      });

	      function checkScroll(scrollOffset){
	      	let offsetIntro= introH - headerH;
	      	if( scrollOffset >= offsetIntro){
	      		header.addClass("fixed");
	      	}else{
	      		header.removeClass("fixed");
	      	}
	      }

	      $("[data-scroll]").on("click", function(event) {
	      	event.preventDefault();

	      	let $this=$(this),
	      		 blockId = $this.data('scroll'),
	      		 blockOffset = ($(blockId).offset().top)-headerH; 
	      		 console.log(blockOffset);

	     			 $("html, body").animate({
	      		scrollTop: blockOffset}, 500);
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