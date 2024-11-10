const header = document.querySelector('header'),
	  plug = document.querySelector('.header-plug'),
	  scrollArrow = document.querySelector('#scroll-arrow'),
	  changeHeaderOn = 10;

if (window.location.hash === '#narrow') {
	smallScroll();
}

scrollArrow.onclick = smallScroll;


function smallScroll(){
	window.scrollBy({
		top: 15,
		behavior: 'smooth'
	});
}

function narrowHeader() {
	if (getScrollY() >= changeHeaderOn) {
		header.classList.add('narrow');
		plug.classList.add('narrow');

		window.removeEventListener('scroll', onScroll, false);
	}
}

function onScroll(event) {
    setTimeout(narrowHeader, 50);
}

function getScrollY() {
	return window.scrollY || document.documentElement.scrollTop;
}

narrowHeader();
window.addEventListener('scroll', onScroll, false);
