let scrollSection = document.querySelector('._scroll-block[data-scroll="scroll-packages"]'),
	scrollText = document.querySelector('._scroll-text[data-scroll="scroll-packages"]'),
	scrollSectionHeght = scrollSection.offsetHeight;

let posScroll = scrollSection.getBoundingClientRect().top;


window.addEventListener('scroll', function () {
	// console.log(scrollSection.getBoundingClientRect().top);
	let actScrollSection = scrollSection.getBoundingClientRect().top;
	// console.log(actScrollSection, (posScroll / 2));

	// if (+(actScrollSection / 2) < +(posScroll / 2)) {
	// console.log(actScrollSection);

	// console.log((actScrollSection / 8), ((actScrollSection) * 2));

	// if ((actScrollSection) < 0) {
		console.log(actScrollSection);

		scrollText.style.bottom = `${(((actScrollSection)) * 2) + (scrollSectionHeght/2)}px`;
		// scrollText.style.bottom = `${Math.abs((actScrollSection) - (scrollSectionHeght / 2)) / 2}px`;
	// }

	// } else {
	// 	// scrollText.style.top = `${actScrollSection/2}px`;
	// }

});