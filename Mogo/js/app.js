$(function(){
								/*Обявление переменных и присвоение слекторов */
	var header = $("#header"),               	// переменная header  
		introH = $("#intro").innerHeight(),  	// переменная introH со значением высоты .innerHeight() 
		scrollOffset = $(window).scrollTop();   // переменная scrollOffset c значением   
												// высоты окна $(window) при загрузке страницы   
												// ПРИ ПОМОЩИ ФУНКЦИИ .scrollTop() 	

										// FIXED HEADER
										
					 /* При скроле Значение отступа от Top в перменной scrollOffset*/
	checkScroll(scrollOffset);                  // 	1) проверка перменной scrollOffset   

	$(window).on("scroll", function(){          // при скроле (window) 
		scrollOffset = $(this).scrollTop();		// обновляем изаносим значение в scrollOffset  
												// ПРИ ПОМОЩИ ФУНКЦИИ .scrollTop()  

		checkScroll(scrollOffset);				// вызов функции checkScroll и 
												// отправляем знач. в  (scrollOffset)																				
	});
								/* Удаление или добовления класса .fixed */
	function checkScroll(scrollOffset){        	// 	2) проверка перменной; вызов функции checkScroll
		if ( scrollOffset >= introH ) {		   	// если больше или равно introH
			header.addClass("fixed");			// добовляем класс ("fixed") классу header   
												// ПРИ ПОМОЩИ ФУНКЦИИ .addClass  
												
		} else { 								// в других случаях удаляем класс ("fixed") 
			header.removeClass("fixed");		// ПРИ ПОМОЩИ ФУНКЦИИ .removeClass
		} 
	}

										/*SMOOTH SCROLL*/ 
	
	$("[data-scroll]").on("click", function(event){ // 1) при клике на атрибут $("[data-scroll]")

									 /*Отмена поведения */
		event.preventDefault();                     // отмена стандартного поведения ссылки event
													// ПРИ ПОМОЩИ ФУНКЦИИ .preventDefault()
													
								/*Получение значения высоты ссылки отступа*/
		var $this = $(this),						// 2) при нажатии на элемент $(this) сохроняем в отдельную переменную 
			blockId = $this.data("scroll"),         // сохраняем в переменную blockId значения атрибута .data("scroll")
			blockOffset = $(blockId).offset().top; 	// получить значение отступ от верха страницы 
													// селектор $(blockId)
													// ПРИ ПОМОЩИ МЕТОДА .offset() полечаем значение от .top;
													// отступ от верха страницы 	
															 
							/*Перемещение до указанной высоты */
		$("html, body").animate({        			// ПРИ ПОМОЩИ МЕТОДА .animate         
			scrollTop: blockOffset        			// значения высоты blockOffset нужно проскролить 
		}, 500)                           			// время в мили секундах

						/*Добовление класса при нажатии на ссылку*/
		$("#nav a").removeClass("active") 			// удаляем класс ("active") при нажатии на ("#nav a") 	
													// ПРИ ПОМОЩИ ФУНКЦИИ .removeClass  
		$this.addClass("active");					// добовляем класс только при нажатии 
													// ПРИ ПОМОЩИ ФУНКЦИИ .addClass 
	});

								/*BURGER  MENU MODIFICATION */ 

	                                         
	$("#nav_toggle").on("click", function(event){   // при нажатии на селектор ("#nav_toggle")  
		event.preventDefault(); 			 	    // отмена стандартного поведения ссылки event

								// для изменения вида значка меню
		$(this).toggleClass("active");			    // При нажатии (this) на добовления или удаление класса ("active")	
							 
							  // для открытия или закрытия меню
		$("#nav").toggleClass("active");            // при нажати ("#nav") на добовления или удаление класса ("active")
												    // ПРИ ПОМОЩИ МЕТОДА .toggleClass
	});

							/*ACCORDION MODIFICATION <!-- Wedo --> */
	
	$("[data-collapse]").on("click", function(event){ // при клике на атрибут ("[data-collapse]")
		event.preventDefault();                       // отмена стандартного поведения ссылки event 
 
		var $this = $(this),						  // при нажатии на элемент $(this) сохроняем в отдельную переменную
			blockId = $this.data("collapse");	      // сохраняем в переменную blockId значения атрибута .data("scroll")	

			$this.toggleClass("active"); 			  // при нажати $this на добовления или удаление класса ("active")
												      // ПРИ ПОМОЩИ МЕТОДА .toggleClass
	});
	
	// Slider
	
	$("[data-slider]").slick({
		 infinite: true,
		 fade: false,
	     slidesToShow: 1,
         slidesToScroll: 1

	});


});