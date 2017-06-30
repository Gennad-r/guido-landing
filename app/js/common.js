$(function() {

	// Custom JS
	//scroll to



		$('.navigation a, .to-top').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href") || $(this).attr("data"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - $('.navigation').height() + 1
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
		
		if ( window.scrollY >= 150 ) {
			$('.navigation').addClass('s-scrolled');
		} else {
			$('.navigation').removeClass('s-scrolled');
		};
		
		if ( window.scrollY >= window.innerHeight * 0.8 ) {
			$('.to-top').addClass('s-scrolled');
		} else {
			$('.to-top').removeClass('s-scrolled');
		};



		// Assign active class to nav links while scolling
		$('.sect').each(function(i) {
				if ($(this).position().top - 150 <= scrollDistance) {
						//console.log($(this).position().top, );
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();


	/*$('.navigation').activescroll({
		offset: 42
	});*/
	// navigation menu


	//slider for challenges
	$('#challengesSlider').slick({
		autoplay: 		true,
		slidesToScroll:	1,
		dots: 			true,
		arrows:			false,
		draggable:		false,
		mobileFirst:	true,
		
	});
});
