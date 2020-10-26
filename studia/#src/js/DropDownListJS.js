

//---------------------------------------------
// Drop-down list
//---------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	let navs = document.querySelectorAll('.faq-card');
	for (let i = 0; i < navs.length; i++) {
		navs[i].addEventListener('click', selectMenu(i), false);
	}

	function selectMenu(iterator) {
		return function () {
			let parents = document.querySelectorAll('.faq-card');
			parents.forEach(function (item, iter) {


				if (iterator == iter) {
					item.classList.toggle('show');
				}
			});

		}
	}

})