
	if (window.innerWidth <= 991) {
		let reviewsText = document.querySelectorAll('.reviews-slide__text');
		for (let i = 0; i < reviewsText.length; i++) {
			const el = reviewsText[i];
			console.log(el.offsetHeight);
			
			if (el.offsetHeight >= 120) {
				el.setAttribute('style','max-height:120px; display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;');
				let readMore = document.createElement('div');
				readMore.classList.add('readMmore');
				readMore.innerHTML = 'Читать полностью';
				el.after(readMore)

				readMore.addEventListener("click", function (e) {
					el.style.display = 'block';
					el.style.maxHeight = '100%';
					readMore.style.opacity = '0';
				});
			}
		}
	}