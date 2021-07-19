let scrollSection = document.querySelector('._scroll-block[data-scroll="scroll-packages"]'),
	scrollText = document.querySelector('._scroll-text[data-scroll="scroll-packages"]'),
	sectiontHeight = scrollSection.offsetHeight;

window.addEventListener('scroll', function () {

	if (Visible(scrollSection) === true) {
		elsum = scrollSection.getBoundingClientRect().top + sectiontHeight;
		// console.log(elsum/100);


		// if (elsum < (sectiontHeight)) {
			// scrollText.style.cssText = `
			// 		transform: rotate(-180deg) translateY(calc(-50% + ${elsum / 100 * 1.2}rem ) )
			//   `

		// }

	} else {

	}

});