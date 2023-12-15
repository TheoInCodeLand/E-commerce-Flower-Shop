(function (R) {
	"use strict";
	/*----------------------------------------
	   Sticky Menu Activation
	---------------------------------*/
	R(window).on('scroll', function () {
		if (R(this).scrollTop() > 300) {
			R('.header-sticky').addClass('sticky');
		} else {
			R('.header-sticky').removeClass('sticky');
		}
	});
	/*----------------------------------------
		Off Canvas
	-------------------------------------------*/
	R(".off-canvas-btn").on('click', function () {
		R("body").addClass('fix');
		R(".off-canvas-wrapper").addClass('open');
	});

	R(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		R("body").removeClass('fix');
		R(".off-canvas-wrapper").removeClass('open');
	});

	/*----------------------------------------
		Off Canvas Menu
	-------------------------------------------*/
	R(".off-canvas-menu-btn").on('click', function () {
		R("body").addClass('fix');
		R(".off-canvas-menu-wrapper").addClass('open');
	});

	R(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		R("body").removeClass('fix');
		R(".off-canvas-menu-wrapper").removeClass('open');
	});
	/*----------------------------------------*/
	/*  Cart Plus Minus Button
	/*----------------------------------------*/
	R('.cart-plus-minus').append(
		'<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
	);
	R('.qtybutton').on('click', function () {
		var Rbutton = R(this);
		var oldValue = Rbutton.parent().find('input').val();
		if (Rbutton.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		Rbutton.parent().find('input').val(newVal);
	});
	/*----------------------------------------*/
	/* Toggle Function Active
	/*----------------------------------------*/
	// showlogin toggle
	R('#showlogin').on('click', function () {
		R('#checkout-login').slideToggle(900);
	});
	// showlogin toggle
	R('#showcoupon').on('click', function () {
		R('#checkout_coupon').slideToggle(900);
	});
	// showlogin toggle
	R('#cbox').on('click', function () {
		R('#cbox-info').slideToggle(900);
	});

	// Ship box toggle
	R('#ship-box').on('click', function () {
		R('#ship-box-info').slideToggle(1000);
	});
	/*----------------------------------------
		Responsive Mobile Menu
	------------------------------------------*/
	//Variables
	var RoffCanvasNav = R('.mobile-menu'),
	RoffCanvasNavSubMenu = RoffCanvasNav.find('.dropdown');
	//Add Toggle Button With Off Canvas Sub Menu
	RoffCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
	//Close Off Canvas Sub Menu
	RoffCanvasNavSubMenu.slideUp();
	//Category Sub Menu Toggle
	RoffCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
	var Rthis = R(this);
	if ( (Rthis.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && (Rthis.attr('href') === '#' || Rthis.hasClass('menu-expand')) ) {
		e.preventDefault();
		if (Rthis.siblings('ul:visible').length){
			Rthis.parent('li').removeClass('active');
			Rthis.siblings('ul').slideUp();
		} else {
			Rthis.parent('li').addClass('active');
			Rthis.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
			Rthis.closest('li').siblings('li').find('ul:visible').slideUp();
			Rthis.siblings('ul').slideDown();
		}
	}
	});

	/*----------------------------------------
		Swiper Slider Activation Js
	------------------------------------------*/
	// Home 01 Slider
	var intro11Slider = new Swiper('.intro11-slider', {
        loop: true,
        speed: 400,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'fade',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
	});
	// Product Carousel
	var intro11Slider = new Swiper('.product-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2,
			  spaceBetween: 10
			},
			// when window width is >= 767px
			768: {
			  slidesPerView: 3,
			  spaceBetween: 10
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			  },
		  }
	});
	// item Carousel 2
	var intro11Slider = new Swiper('.item-carousel-2', {
		slidesPerView: 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 480px
			480: {
			  slidesPerView: 1,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 2,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 2,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 2,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
			  },
		  }
	});
	// Brand Logo Carousel
	var intro11Slider = new Swiper('.brand-logo-carousel', {
		loop: true,
        speed: 800,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'slide',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 3,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 4,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			  },
		  }
	});
	// Testimonial Carousel
	var intro11Slider = new Swiper('.testimonial-carousel', {
        loop: true,
        speed: 800,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'slide',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		//autoplay: {},

	});
	// Latest Post Carousel
	var intro11Slider = new Swiper('.latest-post-carousel', {
        loop: true,
		direction: 'vertical',
		slidesPerView: 3,
		mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		//autoplay: {},
		

	});
	// Single product with Thumbnail
	var galleryThumbs = new Swiper('.single-product-thumb', {
		spaceBetween: 10,
		slidesPerView: 4,
		loop: false,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 3,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 4,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 3,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
			},
		  }
	  });
	var galleryTop = new Swiper('.single-product-img', {
	spaceBetween: 10,
	loop: false,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
	});
	/*----------------------------------------*/
	/*  Shop Grid Activation
	/*----------------------------------------*/
	R('.shop_toolbar_btn > button').on('click', function (e) {
	
		e.preventDefault();
		
		R('.shop_toolbar_btn > button').removeClass('active');
		R(this).addClass('active');
		
		var parentsDiv = R('.shop_wrapper');
		var viewMode = R(this).data('role');
		
		
		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-6 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
			
		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-6 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}
		
		if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-6 col-sm-6 col-cust-5');
		}
			
	});
	/*--------------------------------
	Price Slider Active
	-------------------------------- */
	R( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
        R( "#amount" ).val( "R" + ui.values[ 0 ] + " - R" + ui.values[ 1 ] );
       }
    });
    R( "#amount" ).val( "R" + R( "#slider-range" ).slider( "values", 0 ) +
       " - R" + R( "#slider-range" ).slider( "values", 1 ) );
	/*----------------------------------------
		Bootstrap 5 Tooltip
	------------------------------------------*/
	R(function () {
		R('[data-toggle="tooltip"]').tooltip();
	});
	
	/*----------------------------------------*/
	/*  Countdown
	/*----------------------------------------*/
	R('[data-countdown]').each(function() {
		var Rthis = R(this), finalDate = R(this).data('countdown');
		Rthis.countdown(finalDate, function(event) {
			Rthis.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
		});
	});
	/*----------------------------------------*/
	/*------ Popup Image
	-------------------------------------------------*/
	R('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
	/*---------------------------------
	/* 	MailChimp
    -----------------------------------*/
    R('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
    });
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            R('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            R('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            R('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
	}
	const form = R('#contact-form'),
	formMessages = R('.form-message');

	 R(form).submit(function (e) {
		 e.preventDefault();
		 var formData = form.serialize();
		 R.ajax({
			 type: 'POST',
			 url: form.attr('action'),
			 data: formData
		 }).done(function (response) {
			 // Make sure that the formMessages div has the 'success' class.
			 R(formMessages).removeClass('alert alert-danger');
			 R(formMessages).addClass('alert alert-success fade show');

			 // Set the message text.
			 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
			 formMessages.append(response);

			 // Clear the form.
			 R('#contact-form input,#contact-form textarea').val('');
		 }).fail(function (data) {
			 // Make sure that the formMessages div has the 'error' class.
			 R(formMessages).removeClass('alert alert-success');
			 R(formMessages).addClass('alert alert-danger fade show');

			 // Set the message text.
			 if (data.responseText !== '') {
				 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
				 formMessages.append(data.responseText);
			 } else {
				 R(formMessages).text('Oops! An error occurred and your message could not be sent.');
			 }
		 });
	 });
	/*--------------------------------
	/* 	Scroll To Top
	-------------------------------- */
	function scrollToTop() {
		var RscrollUp = R('.scroll-to-top'),
			RlastScrollTop = 0,
			Rwindow = R(window);

		Rwindow.on('scroll', function () {
			var topPos = R(this).scrollTop();
			if (topPos > RlastScrollTop) {
				RscrollUp.removeClass('show');
			} else {
				if (Rwindow.scrollTop() > 200) {
					RscrollUp.addClass('show');
				} else {
					RscrollUp.removeClass('show');
				}
			}
			RlastScrollTop = topPos;
		});

		RscrollUp.on('click', function (evt) {
			R('html, body').animate({
				scrollTop: 0
			}, 600);
			evt.preventDefault();
		});
	}
	scrollToTop();
	/*----------------------------------------*/
	/*  Nice Select
	/*----------------------------------------*/
	R(document).ready(function () {
		R('.nice-select').niceSelect();
	});
	/*----------------------------------------*/
	/*-----  Preloader
	---------------------------------*/
	R(window).on('load', function () {
		R('#preloader').delay(350).fadeOut('slow')
		R('body').delay(350).css({'overflow':'visible'});
	});
    
})(jQuery);

