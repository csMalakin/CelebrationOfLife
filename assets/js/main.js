/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// // Mobile?
	// 	if (browser.mobile)
	// 		$body.addClass('is-mobile');
	// 	else {

	// 		breakpoints.on('>medium', function() {
	// 			$body.removeClass('is-mobile');
	// 		});

	// 		breakpoints.on('<=medium', function() {
	// 			$body.addClass('is-mobile');
	// 		});

	// 	}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});
			

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

<<<<<<< HEAD
		

=======
>>>>>>> a4e9b5ecb6b2160674c6ef9c35c1e2e3878e00ec
})(jQuery);

let celebration = document.querySelector('#celebration');
let cleoName = document.querySelector('#name')
let cleoDates = document.querySelector('#dates')

celebration.addEventListener('animationend', ()=>{
	celebration.classList.remove('fade-in')
	celebration.classList.add('fade-out')
	celebration.addEventListener('animationend',()=>{
		celebration.classList.toggle('hidden')
		cleoName.classList.add('fade-in')
		cleoName.classList.toggle('hidden')
		cleoDates.classList.add('fade-in')
		cleoDates.classList.toggle('hidden')
	})
	
<<<<<<< HEAD
})

document.addEventListener('DOMContentLoaded', function() {
	celebration.classList.toggle("hidden")
 });

//  $(window).load(function() {
// 	$("body").removeClass("preload");
//   });

window.addEventListener(
    'load',
    function load()
    {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('preload');
    },
    false);
=======
})
>>>>>>> a4e9b5ecb6b2160674c6ef9c35c1e2e3878e00ec
