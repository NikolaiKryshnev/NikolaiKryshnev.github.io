
function fixedTitle() {
	let CaseTitle = document.querySelector('.cases ._fixedTitle'),
		headerHeight = document.querySelector('.header').offsetHeight,
		title = document.querySelector('._fixedTitle');
	if (CaseTitle.getBoundingClientRect().top <= headerHeight) {
		title.classList.add('_fixed')
		title.style.top = `${headerHeight}px`

	} else {
		title.classList.remove('_fixed')
		title.style.top = '0px'
	}


}
window.addEventListener('scroll', function (e) {
	// fixedTitle()

});