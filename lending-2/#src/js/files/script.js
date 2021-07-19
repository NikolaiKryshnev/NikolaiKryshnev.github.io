
let inputFile = document.querySelector('input[type="file"]'),
	inputText = document.querySelector('.js-fileName');

inputFile.addEventListener('change', (e) => {
	inputText.innerHTML = 'Фаил загружен';

})


if (window.innerWidth <= 526.88) {
	let gridItem = document.querySelectorAll('.grid__item'),
	btnShow = document.querySelector('._btnShow')

	for (let index = 0; index < 6; index++) {
		const element = gridItem[index];
		console.log(element);
		
		element.style.display = "none"
	}

	btnShow.addEventListener('click', (e) => {
		for (let index = 0; index < gridItem.length; index++) {
			const el = gridItem[index];
			
			el.style.display = "block"
		}
		
	})
	
} 