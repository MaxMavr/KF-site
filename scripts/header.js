colorArray = ['#9943e2', '#5646ff', '#ff9e33', '#ff6433', '#ff4267', '#1bcec4'];

document.documentElement.style.setProperty('--main-bg-color',
colorArray[Math.floor(Math.random() * colorArray.length)]);


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
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
