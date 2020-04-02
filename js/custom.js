(function($) {
    'use strict'; // Start of use strict
  

    $(document).ready(function() {
        // Check if element is scrolled into view
        function isScrolledIntoView(elem) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
      
          var elemTop = $(elem).offset().top;
          var elemBottom = elemTop + $(elem).height();
      
          return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        // If element is scrolled into view, fade it in
        $(window).scroll(function() {
          $('.aright').each(function() {
            if (isScrolledIntoView(this) === true) {
            //   console.log('working',$(this))
              $(this).removeClass('dpn')
              $(this).addClass('animated')
              $(this).addClass('fadeInRight')
              
              $(this).addClass('dp')
              
            }
          });
        });
        $(window).scroll(function() {
            $('.aleft').each(function() {
              if (isScrolledIntoView(this) === true) {
                // console.log('working',$(this))
                $(this).removeClass('dpn')
                $(this).addClass('animated')
                $(this).addClass('fadeInLeft')
                
                $(this).addClass('dp')
                
              }
            });
          });
          $(window).scroll(function() {
            $('.aflash').each(function() {
              if (isScrolledIntoView(this) === true) {
                // console.log('working',$(this))
                $(this).removeClass('dpn')
                $(this).addClass('animated')
                $(this).addClass('flash')
                
                $(this).addClass('dp')
                
              }
            });
          });   
          
          $(window).scroll(function() {
            $('.atada').each(function() {
              if (isScrolledIntoView(this) === true) {
                // console.log('working',$(this))
                $(this).removeClass('dpn')
                $(this).addClass('animated')
                $(this).addClass('tada')
                
                $(this).addClass('dp')
                
              }
            });
          }); 
          $(window).scroll(function() {
            $('.aswing').each(function() {
              if (isScrolledIntoView(this) === true) {
                // console.log('working',$(this))
                $(this).removeClass('dpn')
                $(this).addClass('animated')
                $(this).addClass('swing')
                
                $(this).addClass('dp')
                
              }
            });
          });
            
      });

    
      

   /*------------------------------------------------------------------
    	Scrool Top
    ------------------------------------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	
	/*------------------------------------------------------------------
        Header Navigation
    ------------------------------------------------------------------*/
    var windowSize = $(window).width();

    if (windowSize >= 767) {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
    }
 	/*------------------------------------------------------------------
        Loader
    ------------------------------------------------------------------*/
  
        $("#dvLoading").fadeOut("fast");
	
	  // map zooming 	
		$('.google-map').on('click', function() {
            $('.google-map').find('iframe').css("pointer-events", "auto");
        });
	
    /*------------------------------------------------------------------
    Owl Carousel for screenshots
	------------------------------------------------------------------*/
    var owl = $("#screenshots");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 3
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            },
            1600: {
                items: 4
            }
        }
    });
	

/*------------------------------------------------------------------
	Count Down
	------------------------------------------------------------------*/
if ($(".count-down").length) {
    var year = parseInt($(".count-down").attr("data-countdown-year"), 10);
    var month = parseInt($(".count-down").attr("data-countdown-month"), 3) - 1;
    var day = parseInt($(".count-down").attr("data-countdown-day"), 10);
    $(".count-down").countdown({
        until: new Date(year, month, day),
        padZeroes: true
    });
}	
	/*------------------------------------------------------------------
    FAQ
    ------------------------------------------------------------------*/
    $('.panel-heading a').on('click', function() {
        $('.panel-heading').removeClass('active');
        $(this).parents('.panel-heading').addClass('active');
    });
	/*------------------------------------------------------------------
	 Accordion Box
	 ------------------------------------------------------------------*/
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	 /*------------------------------------------------------------------
        Animation Numbers
    ------------------------------------------------------------------*/
    jQuery('.animateNumber').each(function() {
        var num = jQuery(this).attr('data-num');

        var top = jQuery(document).scrollTop() + (jQuery(window).height());
        var pos_top = jQuery(this).offset().top;
        if (top > pos_top && !jQuery(this).hasClass('active')) {
            jQuery(this).addClass('active').animateNumber({
                number: num
            }, 2000);
        }
    });
    /*------------------------------------------------------------------
    Owl Carousel for Testimonials
	------------------------------------------------------------------*/
    var owl = $("#testimonials");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });

	/*------------------------------------------------------------------
    Video Popup
    ------------------------------------------------------------------*/
    var $popupVideo = $('[data-popup="video"]');

    if ($popupVideo.length) {
        $popupVideo.magnificPopup({
            type: 'iframe'
        });
    }
	
})(jQuery);

/*------------------------------------------------------------------
	WOW
------------------------------------------------------------------*/

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();