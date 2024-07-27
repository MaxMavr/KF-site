let docElem = document.documentElement,
	header = document.querySelector('header'),
	plug = document.querySelector('.header-plug'),
	scrollArrow = document.querySelector('#scroll-arrow'),
	didScroll = false,
	changeHeaderOn = 10;

scrollArrow.onclick = () => {
	window.scrollBy({
		top: 15,
		behavior: 'smooth' // добавляет плавность прокрутки
	});
}

function listen() {
	window.addEventListener('scroll',
		function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 50);
			}
	}, false);
}

function scrollPage() {
	let sy = getScrollY();
	if (sy >= changeHeaderOn) {
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

function getScrollY() {
	return window.scrollY || document.documentElement.scrollTop;
}

listen();
