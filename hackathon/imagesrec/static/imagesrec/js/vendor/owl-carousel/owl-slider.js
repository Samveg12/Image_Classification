// JavaScript Document

// HEADER CAROUSEL
 $(document).on('ready', function() {	
	$('#header-slider').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 20,
		autoplay: true,
		dots:true,
    nav:false,
		autoplayTimeout: 4000,
		smartSpeed: 450,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
});

// GALLERY CAROUSEL
 $(document).on('ready', function() {			
			$('#owl-gallery').owlCarousel( {
		loop: false,
		center: false,
		items: 3,
		margin: 20,
		autoplay: true,
		dots:false,
		nav:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});

// THREE-COLUMN CAROUSEL
 $(document).on('ready', function() {	
	$('#owl-demo2').owlCarousel( {
		loop: true,
		center: false,
		items: 4,
		margin: 20,
		autoplay: true,
		dots:true,
    nav:false,
		autoplayTimeout: 4000,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1170: {
				items: 3
			}
		}
	});
});	


// TESTIMONIAL_2 CAROUSEL
 $(document).on('ready', function() {	
	$('#testimonial').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 20,
		autoplay: false,
		dots:false,
    nav:true,
		autoplayTimeout: 4000,
		smartSpeed: 450,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
});
	
