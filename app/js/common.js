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

				var target = $(this).attr("href") || $(this).attr("data"), // Set the target as variable
					pos = $(target).offset().top - $('.navigation').height() + 1; // navigation panel heigth
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
					scrollTop: pos
				}, 600/*, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
					}*/);

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


	//E-mail Ajax Send

	$("#contact-us").submit(function() { //Change
			var th = $(this);
			$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
				$("input[name='customer-country']").attr('value', data.country_name);
				$("input[name='customer-ip']").attr('value', data.ip);
				$.ajax({
					type: "POST",
					url: "/mail.php", //Change
					data: th.serialize()
				}).done(function() {
					$("#form-wraper").css({"background-color": "#cdfdd2"});
					$("#form-wraper legend").css({"background-color": "#247531"});
					$("#form-wraper .right button").css({"background-color": "#247531"});
					$("#form-wraper .right button").text("Thank you!");
					setTimeout(function() {
						// Done Functions
						$.magnificPopup.close();
						th.trigger("reset");
					}, 1000);
				});
			});
		return false;
	});
});
// Google Analitics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49350407-2', 'auto');
ga('send', 'pageview');