$(function() {

	// Custom JS

	//popup form
	var btns = $('.button');
	$(btns).magnificPopup({
		items: {
			type: 'inline',
			src: '#form-wraper'
		},
		removalDelay: 300,
		closeBtnInside: true,
		mainClass: 'mfp-fade'
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
			setTimeout(function () {$(".st").addClass("fadeIn")
				setTimeout(function () {$(".nd").addClass("fadeIn")
					setTimeout(function () {$(".rd").addClass("fadeIn")}, 600);
				}, 600);
				
			}, 600);

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

	//vivus

	var city = new Vivus('city', {type: 'async', duration: 700}, function() {});

	var neural = new Vivus('neural', {type: 'async', duration: 500, dashGap: 20}, function() {
		$('#neural .neural0').attr('style', 'fill:#2F4666');
		$('#neural .neural1').attr('style', 'fill:#F7921D');
	});
	var opti = new Vivus('opti', {type: 'async', duration: 500, dashGap: 20}, function() {
		$('#opti .opti1').attr('style', 'fill:#2F4666');
		$('#opti .opti0').attr('style', 'fill:#F7921D');
	});
	var time = new Vivus('time', {type: 'async', duration: 300, dashGap: 20}, function() {
		$('#time .time1').attr('style', 'fill:#2F4666');
		$('#time .time0').attr('style', 'fill:#F7921D');
	});
	var cost = new Vivus('cost', {type: 'async', duration: 200, dashGap: 20}, function() {
		$('#cost .cost1').attr('style', 'fill:#2F4666');
		$('#cost .cost0').attr('style', 'fill:#F7921D');
	});


	// hamburger menu
	$('.hamburger--elastic').click(function () {
			$(this).toggleClass("is-active");
			$(".navigation").toggleClass("clicked");
	});







	//Form
		//E-mail Ajax Send
	$("#contact-us").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#form-wraper").css({"background-color": "#cdfdd2"});
			$("#form-wraper legend").css({"background-color": "#247531"});
			$("#form-wraper .right button").css({"background-color": "#247531"});
			$("#form-wraper .right button").text("Thank you!");
			//console.log("Thank you!");
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});
