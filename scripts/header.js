var cbpAnimatedHeader = (function() {
	var docElem = document.documentElement,
		header = document.querySelector('header'),
		plug = document.querySelector('.header-plug'),
		didScroll = false,
		changeHeaderOn = 20;

	function init() {
		window.addEventListener('scroll', function(event) {
			if(!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 50);
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
    if ( sy >= changeHeaderOn ) {


			header.classList.add('narrow');
			plug.classList.add('narrow');

			// setTimeout(scrollPage, 80);
			// document.querySelector('.header-container').appendChild(button);
		}
		// else {
		// 	header.classList.remove('narrow');
		// }
		// didScroll = false;
	}

	function scrollY() {
		return window.scrollY || docElem.scrollTop;
	}

	init();

})();
