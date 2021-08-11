function filtersBtnShow() {
	let filters = document.querySelector('.filters'),
		filtersBtn = document.querySelectorAll('.filters__btn');

	if (filters != null) {
		let dots = document.createElement('div'),
			block = document.createElement('div'),
			name = document.createElement('div');

		dots.className = "filters__dots _filter-btn";
		block.className = "filters__block";
		name.className = "filters__name";

		dots.innerHTML = `<div class="dot"></div>`

		if ((filtersBtn.length > 4) && window.innerWidth > 991) {
			filters.append(dots);
			filters.append(block);

			for (let i = 0; i < filtersBtn.length; i++) {
				const el = filtersBtn[i];
				if (i > 3) {
					block.append(el);
				}

			}
		} else {
			filters.append(name);
			filters.append(dots);
			filters.append(block);

			let filterBtnActive = document.querySelector('.filters__btn._active').innerHTML,
				filterName = document.querySelector('.filters__name');

			filterName.innerHTML = filterBtnActive;


			for (let i = 0; i < filtersBtn.length; i++) {
				const el = filtersBtn[i];
				block.append(el);
			}
		}
	}
}
filtersBtnShow()

function showBlock() {
	let filterBtn = document.querySelector('._filter-btn'),
		filterBlock = document.querySelector('.filters__block');
	if (filterBtn) {
		window.addEventListener('click', e => {
			const target = e.target;
			if (!target.closest('._filter-btn') && !target.closest('._filter-btn')) {
				filterBlock.classList.remove('_active')
			} else {
				filterBlock.classList.toggle('_active')
			}
		})
	}
}

showBlock()

if (document.querySelector('.grid')) {
	let grid = new Isotope('.grid', {
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	let filterBtn = document.querySelectorAll('.filters .filters__btn'),
		gridItem = document.querySelectorAll('.grid-item');


	for (let i = 0; i < filterBtn.length; i++) {
		filterBtn[i].onclick = function (click) {

			filterBtn[i].classList.remove('_active')

			// click.preventDefault();
			let filterData = event.target.getAttribute('data-filter');

			for (let i = 0; i < filterBtn.length; i++) {
				filterBtn[i].classList.remove('_active');
			}
			event.target.classList.add('_active');

			grid.arrange({
				filter: filterData
			});

			for (let i = 0; i < gridItem.length; i++) {
				gridItem[i].classList.remove('row-reverse', 'row');

				if (gridItem[i].classList.contains(`${filterData.replace('.', "")}`)) {
					gridItem[i].classList.add('_show');
				} else {
					gridItem[i].classList.remove('_show');
				}
			}
			let gridItemShow = document.querySelectorAll('.grid-item._show');

			for (let i = 0; i < gridItemShow.length; i++) {
				if (i % 2 === 1) {
					gridItemShow[i].classList.add('row-reverse');
				} else {
					gridItemShow[i].classList.add('row');

				}
			}
			if (window.innerWidth <= 991) {
				let filterBtnActive = document.querySelector('.filters__btn._active').innerHTML,
					filterName = document.querySelector('.filters__name');

				filterName.innerHTML = filterBtnActive;
			}

		};
	}

}