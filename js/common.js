$(function() {

	$(document).ready(function() {
		svg4everybody();

		// header search toggle
			$('.header-search').click(function(e) {
				e.stopPropagation();
				$(this).find('.header-search__input').addClass('active');
			});
			
			$('.mob-nav__search').click(function(e) {
				e.stopPropagation();
				$(this).find('.mob-nav__input').addClass('active');
			});

			$('body').click(function() {

				$('.header-search__input').removeClass('active');
				$('.mob-nav__input').removeClass('active');
			});

		// end header search toggle

		// langs toggle
			$('.lang-switch__toggler').click(function() {
				
				var $langLinks = $(this).closest('.header-lang').find('a');
				
				$langLinks.each(function(ind, elem) {
					if($(elem).hasClass('active')){
						$(elem).removeClass('active');
					}else{
						$(elem).addClass('active');
					}
				});
			});
		// end of langs toggle

		// mob-menu toggle

			var slideout = new Slideout({
				'panel': document.querySelector('.main-content'),
				'menu': document.querySelector('.mobile-nav'),
				'padding': 320,
				'tolerance': 70
			});

			slideout.disableTouch();

			$(".toggle-mnu").click(function() {
				$(this).toggleClass("on");
				
				slideout.toggle();
				return false;
			});

			// document.querySelector('.mobile-nav').addEventListener('click', function(eve) {
			// 	if (eve.target.nodeName === 'A') { 
			// 		slideout.close(); 
			// 		$(".toggle-mnu").addClass("visbl")
			// 						.removeClass("on hidd");
			// 	}
			// });

			function slideoutClose(eve) {
				eve.preventDefault();
				slideout.close();
				$(".toggle-mnu").removeClass("on hidd");
				$(".toggle-mnu").addClass("visbl");
			}

			slideout
			.on('beforeopen', function() {
				this.panel.classList.add('main-content-open');
			})
			.on('open', function() {
				this.panel.addEventListener('click', slideoutClose);
				$(".toggle-mnu").addClass("hidd")
								.removeClass('visbl');
			})
			.on('beforeclose', function() {
				this.panel.classList.remove('main-content-open');
				this.panel.removeEventListener('click', slideoutClose);
			});

			$('.mob-nav__header .icon-close').click(function(eve) {
				slideoutClose(eve);
			});
		// end mob-menu toggle

		// superfish
			$('.main-menu').superfish({
				 pathLevels: 0,
				 onBeforeShow: function() {
				 	this.context.querySelector('.sf-with-ul').classList.add('opened');
				 },
				 onBeforeHide: function() {
				 	console.log(this.context);
				 	$('.sf-with-ul').removeClass('opened');
				 }

			});

			$('.acordeon-sublist-services').superfish({

			});
		// end of superfish

		//slick
			$('.clients-slider').slick({
				prevArrow: $('.clients .slider-arrow-mini--prev'),
				nextArrow: $('.clients .slider-arrow-mini--next')
			});

			$('.services-slider').slick({
				responsive: [
					{
						breakpoint: 480,
						settings: {
							// slidesToShow: 4
						appendArrows:'.services .services__append-arrows'

						}	
					},
					]
			});
			
			$('.partners-slider').slick({
				slidesToShow: 6,
				variableWidth: true,
				// infinite: false,
				// centerMode: true,
				prevArrow: $('.partners .slider-arrow--prev'),
				nextArrow: $('.partners .slider-arrow--next'),
				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 4,
							variableWidth: false

						}	
					},
					{
						breakpoint: 780,
						settings: {
							slidesToShow: 3,
							variableWidth: false

						}	
					},
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 2,
							variableWidth: false

						}	
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							variableWidth: false,
							// slidesToShow: 4
						appendArrows:'.services .services__append-arrows'

						}	
					}
					]
			});

			$('.other-serv__slider').slick({
				slidesToShow: 5,
				prevArrow: $('.other-serv .slider-arrow-mini--prev'),
				nextArrow: $('.other-serv .slider-arrow-mini--next'),
				responsive: [
					{
						breakpoint: 980,
						settings: {
							slidesToShow: 4,

						}	
					},
					{
						breakpoint: 710,
						settings: {
							slidesToShow: 3,

						}	
					},
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 2,

						}	
					},
					{
						breakpoint: 360,
						settings: {
							slidesToShow: 1,

						}	
					}
				]
			})

			$('.praud-slider').slick({
				slidesToShow: 4,
				prevArrow: $('.experts-praud .slider-arrow--prev'),
				nextArrow: $('.experts-praud .slider-arrow--next'),

				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 3,

						}	
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2,

						}	
					},
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 1,

						}	
					}
				]
			});

			$('.result-slider').slick({
				slidesToScroll: 1,
 				rows: 2,
 				slidesPerRow: 3,
 				// dots: true
				prevArrow: $('.result .slider-arrow--prev'),
				nextArrow: $('.result .slider-arrow--next'),
				responsive: [
					
					{
						breakpoint: 560,
						settings: {
							
							slidesPerRow: 2

						}	
					},
					{
						breakpoint: 400,
						settings: {
							
							rows: 1,
							slidesPerRow: 1

						}	
					}
				]
			});

			$('.other-cases__slider').slick({
				slidesToScroll: 1,
 				rows: 2,
 				slidesPerRow: 6,
				prevArrow: $('.other-cases .slider-arrow-mini--prev'),
				nextArrow: $('.other-cases .slider-arrow-mini--next'),
				responsive: [
					
					{
						breakpoint: 1100,
						settings: {
							
							slidesPerRow: 5

						}	
					},
					{
						breakpoint: 960,
						settings: {

							slidesPerRow: 4

						}	
					},
					{
						breakpoint: 790,
						settings: {

							slidesPerRow: 3

						}	
					},
					{
						breakpoint: 600,
						settings: {

							slidesPerRow: 2
						}

					},
					{
						breakpoint: 480,
						settings: {

							slidesPerRow: 1
						}

					}
					
				]
			});

			$('.services-page__slider').slick();

			var kvizSlider = $('.kviz-slider').slick({
				arrows: false,
		        accessibility: false,
		        draggable: false,
		        infinite: false,
		        swipe: false,
		        touchMove: false,
		        dots: false
		        // adaptiveHeight: true

			});

			var kvizSlidesCount = $('.kviz-slide').length - 1;

			
			$('.kviz-forward').click(function(e) {
				var $th = $(this),
					$currentSlide = $th.closest('.kviz-slide'),
					$currentRadios = $currentSlide.find('input[type="radio"]');

					console.log('checked ' + $currentSlide.find('input[type="radio"]:checked').length);

					if(!$currentRadios.length || $currentSlide.find('input[type="radio"]:checked').length){

						kvizSlider.slick('slickNext');
						e.preventDefault();
					}
			});

			kvizSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				console.log('percents ' + (nextSlide/kvizSlidesCount )*100 + '%');
				// if(currentSlide > 0){
					$('.kviz-slider').find('.slick-slide[data-slick-index="'+ nextSlide +'"]')

									.find('.kviz-status__bar')
									.css('width', (nextSlide/kvizSlidesCount )*100 + '%');
				// }

			});


		//end of slick

		// services-menu
			// $('.services-menu li').click(function() {
			// 	$(this)
			// 				.addClass('active')
			// 				.siblings()
			// 				.removeClass('active');
			// });
			function servicesMenu() {
				var $servicesDisplay = $('.services-display__text'),
					_self = this; 

				this.init = function() {

					this.events();
				}
				this.events = function() {
					$('.services-menu li, .services-menu__mob-item').on('click', this.menuClick);
				}
				this.menuClick = function(e) {
					e.preventDefault();
					_self.menuRender($(this));
					_self.displayRender($(this));

				}
				this.menuRender = function(menuItem) {
					menuItem.addClass('active')
							.siblings()
							.removeClass('active');
				}
				this.displayRender = function(menuItem) {
					var title = menuItem.find('span').text();
					console.log(title);
					
					$servicesDisplay.each(function(ind, elem) {
							
						if($(elem).attr('data-title') === title){
							$(elem).removeClass('hidden')
									.siblings()
									.addClass('hidden');
						}
					});
				}
			}

			if($('.services').length > 0){
				var servToggle = new servicesMenu();
				servToggle.init();
			}
		// end of services-menu

		// Accordeon-----------------------------------
			$('.acordeon-link').click(function(e) {
				e.preventDefault();
				var $currentItem = $(this).closest('.acordeon-item');
				if($currentItem.hasClass('acordeon-item-with-sublist')){

					$currentItem.find('.acordeon-sublist').first()
					.stop(true, true)
					.slideToggle();
					$currentItem.siblings()
					.find('.acordeon-sublist')
					.stop(true, true)
					.slideUp();

					$currentItem
						.toggleClass('active')
						.siblings()
						.removeClass('active');

				}else{
					return;
				}
			});
		// end Accordeon-----------------------------------


		// imput masking
			$('.masked[name="phone"]').mask('(000) 000-00-00', {
				placeholder: "+7 (___) ___-__-__",
				clearIfNotMatch: true,
				selectOnFocus: true
			});
		// end imput masking


		// popup
			$('.to-popup').magnificPopup({
				type: 'inline',
				preloader: true,
				focus: '#name',

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});

			



		// end popup

		// submit-to-thanks
		$(".submit-to-thanks").submit(function(e) { //Change
			e.preventDefault();
			var th = $(this);
			console.log('triam');
			
			$.magnificPopup.open({
					items: {
						src: $('#popup-thanks')
					},
					type: 'inline',
					preloader: true,
					focus: '#name',

					// When elemened is focused, some mobile browsers in some cases zoom in
					// It looks not nice, so we disable it:
					callbacks: {
						beforeOpen: function() {
							if($(window).width() < 700) {
								this.st.focus = false;
							} else {
								this.st.focus = '#name';
							}
						}
					}
				});
			});
		
		// end submit-to-thanks

		// ikSelect
		
			$('.sky-select').ikSelect({
				autoWidth: false,
				ddMaxHeight: 500,
				onShow: function (inst) {
					// console.log(inst.el);
					// console.log($(inst.el).closest('.ik_select').innerWidth());
					var $parent = $(inst.el).closest('.ik_select'),
						currWidth = $parent.innerWidth();

					$('.ik_select_dropdown').width(currWidth - 50);
					$parent.addClass('active');
				},

				onHide: function (inst) {
					var $parent = $(inst.el).closest('.ik_select');
					$parent.removeClass('active');
				}
			});
		
		// end ikSelect

		// tabs
			var $tabs = $('.tabs__link');

			$tabs.on('click', function(e) {
				e.preventDefault();
				var $th = $(this),
				$href = $th.attr('href'),
				$parent = $th.parent();
				$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');
				
				$($href).removeClass('hidden')
				.siblings()
				.addClass('hidden');
			});
		// end of tabs

	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
