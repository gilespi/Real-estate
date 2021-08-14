/*navigation*/
var scrollWindow = function() {
	$(window).scroll(function(){
	  var $w = $(this),
		  st = $w.scrollTop(),
		  navbar = $('.ag_navbar'),
		  sd = $('.js-scroll-wrap');
  
	  if (st > 150) {
		if ( !navbar.hasClass('scrolled') ) {
		  navbar.addClass('scrolled');	
		}
	  } 
	  if (st < 150) {
		if ( navbar.hasClass('scrolled') ) {
		  navbar.removeClass('scrolled sleep');
		}
	  } 
	  if ( st > 350 ) {
		if ( !navbar.hasClass('awake') ) {
		  navbar.addClass('awake');	
		}
		
		if(sd.length > 0) {
		  sd.addClass('sleep');
		}
	  }
	  if ( st < 350 ) {
		if ( navbar.hasClass('awake') ) {
		  navbar.removeClass('awake');
		  navbar.addClass('sleep');
		}
		if(sd.length > 0) {
		  sd.removeClass('sleep');
		}
	  }
	});
  };
  scrollWindow();

/*back to top button*/
	$(document).ready(function() {
		$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
		$('#toTopBtn').fadeIn();
		} else {
		$('#toTopBtn').fadeOut();
		}
		});
		
		$('#toTopBtn').click(function() {
		$("html, body").animate({
		scrollTop: 0
		}, 1000);
		return false;
		});
		});

		$(".hover").mouseleave(
			function () {
				$(this).removeClass("hover");
			}
		);

		/*contact form*/

		jQuery(document).ready(function() {
     
			/*
					Fullscreen background
			*/
			$.backstretch("assets/img/backgrounds/1.jpg");
			 
			/*
			Contact form
			*/
			$('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
					$('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
			});
			$('.contact-form form').submit(function(e) {
					e.preventDefault();
					$('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
					var postdata = $('.contact-form form').serialize();
					$.ajax({
							type: 'POST',
							url: 'contact.php',
							data: postdata,
							dataType: 'json',
							success: function(json) {
									if(json.emailMessage != '') {
											$('.contact-form form .contact-email').addClass('input-error');
									}
									if(json.subjectMessage != '') {
											$('.contact-form form .contact-subject').addClass('input-error');
									}
									if(json.messageMessage != '') {
											$('.contact-form form textarea').addClass('input-error');
									}
									if(json.antispamMessage != '') {
											$('.contact-form form .contact-antispam').addClass('input-error');
									}
									if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
											$('.contact-form form').fadeOut('fast', function() {
													$('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
													// reload background
													$.backstretch("resize");
											});
									}
							}
					});
			});
			 
	});

	
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


