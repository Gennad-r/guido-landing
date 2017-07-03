$(function() {

	// Custom JS

	//popup form
	$("#btn-contacts").magnificPopup({
		items: {
			type: 'inline',
			src: '#form-wraper'
		},
		closeBtnInside: true,
	});


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
		if ( window.scrollY >= 150 ) {
			$('.navigation').addClass('s-scrolled');
			$('.hamburger').addClass('h-scrolled');
		} else {
			$('.navigation').removeClass('s-scrolled');
			$('.hamburger').removeClass('h-scrolled');
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

		//fade-in scheme images
		if ($("#sect3").position().top - window.innerHeight * 0.8 <= scrollDistance) {
			setTimeout(function () {$(".st").addClass("fadeIn")}, 600);
			setTimeout(function () {$(".nd").addClass("fadeIn")}, 1200);
			setTimeout(function () {$(".rd").addClass("fadeIn")}, 1800);
		
		};
	}).scroll();


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
