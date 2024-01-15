let searchBtn = document.querySelector('._search-btn'),
	searchInput = document.querySelector('._search-input'),
	searchForm = document.querySelector('._header-search');

if (searchBtn != null) {
	searchBtn.addEventListener('click', function (e) {
		searchInput.value = '';
		searchForm.classList.toggle('_active');
		searchBtn.classList.toggle('_active');
		menu_close()
	});

	if (window.innerWidth <= 525.99) {

		let principlesItem = document.querySelectorAll('.principles-item'),
			principlesRow = document.querySelector('.principles-row'),
			principlesMbRow = document.createElement('div');

		if (principlesRow != null) {
			principlesMbRow.classList.add('principles-row-mb');
			principlesRow.appendChild(principlesMbRow)

			for (let i = 0; i < principlesItem.length; i++) {
				const el = principlesItem[i];

				if (!el.classList.contains('principles-item--title')) {
					principlesMbRow.appendChild(el)
				}
			}
		}
	}
}

let contentText = document.querySelector('.content-text');
if (contentText != null) {
	let read = document.createElement('div');
	read.classList.add('content-read');
	read.innerHTML = 'Читать полностью';
	contentText.parentNode.insertBefore(read, contentText.nextSibling);

	read.addEventListener('click', function (e) {
		read.classList.add('_active');
		contentText.classList.add('_active');

	});

}


let ban = document.querySelector('.ban'),
	modalCallback = document.querySelector('.modal-callback');
if (ban != null) {

	let posScroll = ban.getBoundingClientRect().top + ban.offsetHeight;

	window.addEventListener("scroll", function (e) {
		if (posScroll < window.pageYOffset) {
			modalCallback.classList.add('_active');
		} else {
			modalCallback.classList.remove('_active');
		}
	});

} else {
	modalCallback.classList.add('_active');

}


// -------------------

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.ban') != null) {
	let banImg = gsap.timeline({
		scrollTrigger: {
			trigger: ".ban",
			// scrub: true,
			// pin: true,
			// start: "center",
			end: "+=50%",

			scrub: 1,
		}
	});

	banImg.from(".ban-img", { scale: 0.8, ease: "none" }, 0)

}

if (document.querySelector('.services-img__box') != null) {
	let servicesImg = gsap.timeline({
		scrollTrigger: {
			trigger: ".services",
			// scrub: true,
			// pin: true,
			// start: "center",
			end: "+=50%",

			scrub: 1,
		}
	});

	servicesImg.from(".services-img", { scale: 0.8, ease: "none" }, 0)

}

if (document.querySelector('.about-box') != null) {
	let aboutBoxImg = gsap.timeline({
		scrollTrigger: {
			trigger: ".about",
			// scrub: true,
			// pin: true,
			// start: "center",
			end: "+=50%",

			scrub: 1,
		}
	});

	aboutBoxImg.from(".about-box", { scale: 0.8, ease: "none" }, 0)

}




// -----------------------------

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


let itemWork = document.querySelectorAll('.work-list__line');

let itemWorkImg = document.querySelector('.work-content__img');
if (itemWorkImg != null) {

	for (let itemImg = 0; itemImg < itemWork.length; itemImg++) {
		let img = itemWork[itemImg];


		img.addEventListener("mouseover", (e) => {
			itemWorkImg.style.paddingTop = `${img.offsetTop}px`
			itemWorkImg.style.opacity = '0'
			itemWorkImg.querySelector('img').setAttribute('src', `${img.dataset.img}`)
			itemWorkImg.querySelector('source').setAttribute('srcset', `${img.dataset.img}`)
			// itemWorkImg.querySelector('img').style.cssText = `
			// 		transform: rotate(3deg) translateY(0%);
			// 		`	
			setTimeout(() => {
				if (itemImg < 1) {
					itemWorkImg.querySelector('img').style.cssText = `
					transform: rotate(3deg) translateY(-25%)
					`
				}
				else {
					// itemWorkImg.querySelector('img').style.cssText = `
					// 	transform: rotate(${getRandomIntInclusive(-5, 5)}deg) translateY(-50%);
					// 	`

					itemWorkImg.querySelector('img').style.cssText = `
				transform: rotate(3deg) translateY(-50%)
				 	`
				}
				itemWorkImg.style.opacity = '1'

			}, 100);
		});
		// client.addEventListener('mouseleave', (e) => {
		// 	clearActiveClasses();
		// })
	}
}

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
}