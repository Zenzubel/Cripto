// $(function () {

// 	$('.menu-burger__icon').click(function(event) {
// 	$('.menu-burger__list, .menu-burger__icon').toggleClass('active');
// 	$('body').addClass('lock');
// 	});

// 	$('.menu-burger__item').click(function(event) {
// 	$('.menu-burger__list, .menu-burger__icon').removeClass('active');
// 	$('body').removeClass('lock');
// 	});

// 	$('.welcome__drop').click(function(event) {
// 	$('.welcome__drop-list').toggleClass('active');
// 	});

// 	$('.pricing__switcher-l').click(function(event) {
// 	$('.pricing__switcher-runner, .pricing__switcher-l, .pricing__month').addClass('active');
// 	$('.pricing__switcher-r, .pricing__year').removeClass('active');
// 	});

// 	$('.pricing__switcher-r').click(function(event) {
// 	$('.pricing__switcher-r, .pricing__year').addClass('active');
// 	$('.pricing__switcher-l, .pricing__month, .pricing__switcher-runner').removeClass('active');
// 	});

// 	$('.middle__slider-wrap').slick({
// 		// fade: true,
// 		prevArrow: '<button class="middle__button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="12" viewBox="0 0 27 12"><path d="M.156 5.595l6-5.435a.504.504 0 0 1 .547-.078.45.45 0 0 1 .297.45v3.48h19.5c.146 0 .266.046.36.139.093.093.14.212.14.357V7.49a.481.481 0 0 1-.5.497H7v3.478c0 .208-.1.358-.297.451a.49.49 0 0 1-.547-.093l-6-5.498a.508.508 0 0 1 0-.73z"/></svg></button>',
// 		nextArrow: '<button class="middle__button-next"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="12" viewBox="0 0 27 12"><path d="M26.844 5.595l-6-5.435a.504.504 0 0 0-.547-.078.45.45 0 0 0-.297.45v3.48H.5a.489.489 0 0 0-.36.139.484.484 0 0 0-.14.357V7.49a.481.481 0 0 0 .5.497H20v3.478c0 .208.1.358.297.451a.49.49 0 0 0 .547-.093l6-5.498a.508.508 0 0 0 0-.73z"/></svg></button>',
// 		dots: false,
// 		variableWidth: false,
// 		adaptiveHeight: true, //адаптивная высота полезно для мобильных 
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		speed: 1000,
// 		easing: 'liner',
// 		infinite: true,
// 		instalSlide: 0,
// 		autoplay: true,
// 		autoplaySpeed: 2000,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		pauseOnDotsHover: true,
// 		draggable: false, //отключение свайпа на ПК
// 		swipe: true, // отключеие свайпа на мобильных устройствах
// 		touchThreshold: 10, //длина касания для сработки свайпа
// 		touchMove: true, //движение ленты при касании (свайпы при этом работают)
// 		waitForAnimate: false, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
// 		centerMode: true,
// 		centerPadding: '-10%'
// 	});

// 	$('.feedback__slider-wrap').slick({
// 		// fade: true,
// 		prevArrow: '<button class="feedback__button-prev"><svg width="51" height="19" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 51 19"><path transform="rotate(-180 25.847623825073242,9.509012222290039) " d="m0.695248,10.177686l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		nextArrow: '<button class="feedback__button-next"><svg width="51" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 19" fill-rule="evenodd" clip-rule="evenodd"><path d="m0,10.159662l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		dots: false,
// 		variableWidth: false,
// 		adaptiveHeight: true, //адаптивная высота полезно для мобильных 
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		speed: 1000,
// 		easing: 'liner',
// 		infinite: true,
// 		instalSlide: 0,
// 		autoplay: false,
// 		autoplaySpeed: 2000,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		pauseOnDotsHover: true,
// 		draggable: true, //отключение свайпа на ПК
// 		swipe: true, // отключеие свайпа на мобильных устройствах
// 		touchThreshold: 10, //длина касания для сработки свайпа
// 		touchMove: true, //движение ленты при касании (свайпы при этом работают)
// 		waitForAnimate: false, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
// 		centerMode: true,
// 		centerPadding: '-10%'
// 	});

// 	$('.pricing__slider-wrap').slick({
// 		// fade: true,
// 		prevArrow: '<button class="pricing__button-prev"><svg class="pricing__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 51 19"><path transform="rotate(-180 25.847623825073242,9.509012222290039) " d="m0.695248,10.177686l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		nextArrow: '<button class="pricing__button-next"><svg class="pricing__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 19" fill-rule="evenodd" clip-rule="evenodd"><path d="m0,10.159662l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		dots: false,
// 		variableWidth: false,
// 		adaptiveHeight: false, //адаптивная высота полезно для мобильных 
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		speed: 1000,
// 		easing: 'liner',
// 		infinite: true,
// 		instalSlide: 0,
// 		autoplay: false,
// 		autoplaySpeed: 2000,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		pauseOnDotsHover: true,
// 		draggable: true, //отключение свайпа на ПК
// 		swipe: true, // отключеие свайпа на мобильных устройствах
// 		touchThreshold: 10, //длина касания для сработки свайпа
// 		touchMove: true, //движение ленты при касании (свайпы при этом работают)
// 		waitForAnimate: true, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
// 		centerMode: false,
// 		centerPadding: '0',
// 		responsive: [
// 			{
// 			breakpoint: 900,
// 				settings: {
// 					variableWidth: false,
// 					slidesToShow: 1,
// 					swipe: true,
// 					autoplay: false,
// 					pauseOnFocus: true,
// 					pauseOnHover: false,
// 					centerPadding: '0',
// 					centerMode: true,
// 				}
// 			}
// 		]
// 	});

// 	$('.team__slider-wrap').slick({
// 		// fade: true,
// 		prevArrow: '<button class="team__button-prev"><svg class="team__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 51 19"><path transform="rotate(-180 25.847623825073242,9.509012222290039) " d="m0.695248,10.177686l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		nextArrow: '<button class="team__button-next"><svg class="team__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 19" fill-rule="evenodd" clip-rule="evenodd"><path d="m0,10.159662l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
// 		dots: false,
// 		variableWidth: false,
// 		adaptiveHeight: false, //адаптивная высота полезно для мобильных 
// 		slidesToShow: 3,
// 		slidesToScroll: 3,
// 		speed: 1000,
// 		easing: 'liner',
// 		infinite: true,
// 		instalSlide: 0,
// 		autoplay: true,
// 		autoplaySpeed: 4000,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		pauseOnDotsHover: true,
// 		draggable: true, //отключение свайпа на ПК
// 		swipe: true, // отключеие свайпа на мобильных устройствах
// 		touchThreshold: 10, //длина касания для сработки свайпа
// 		touchMove: true, //движение ленты при касании (свайпы при этом работают)
// 		waitForAnimate: true, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
// 		centerMode: false,
// 		centerPadding: '0',
// 		responsive: [
// 			{
// 			breakpoint: 1210,
// 				settings: {
// 					variableWidth: false,
// 					slidesToShow: 3,
// 					swipe: true,
// 					centerMode: true,
// 					autoplay: true,
// 					pauseOnFocus: false,
// 					pauseOnHover: true,
// 					centerPadding: '0'
// 				}
// 			},
// 			{
// 			breakpoint: 945,
// 				settings: {
// 					variableWidth: false,
// 					slidesToShow: 2,
// 					slidesToScroll: 2,
// 					swipe: true,
// 					autoplay: true,
// 					pauseOnFocus: false,
// 					pauseOnHover: false,
// 					centerPadding: '0',
// 					centerMode: false
// 				}
// 			},
// 			{
// 			breakpoint: 640,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			}
// 		]
// 	});

// });
