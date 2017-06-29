$(function() {

	// Custom JS
	// navigation menu
	window.addEventListener('scroll', function (e) {
		if ( window.scrollY >= 150 ) {
			$('.navigation').addClass('scrolled');
		} else {
			$('.navigation').removeClass('scrolled');
		};
		
		if ( window.scrollY >= window.innerHeight * 0.8 ) {
			$('.to-top').addClass('scrolled');
			$('.navigation li:first-child').delay(500).css({"opacity": "1",
															"transform:": "translateX(0)"});
		} else {
			$('.to-top').removeClass('scrolled');
			$('.navigation li:first-child').delay(500).css({"opacity": "0",
															"transform:": "translateX(-100px)"});
		};
	});

	//scroll to

	$('.navigation').activescroll({
		offset: 55
	});

	//slider for challenges
	$('#challengesSlider').slick({
		autoplay: 		false,
		slidesToScroll:	1,
		dots: 			true,
		variableWidth:	true,
		arrows:			false,
		draggable:		false,
		mobileFirst:	true,
		responsive:		[
						{
							breakpoint: 1170
						}
						]
	});
});
