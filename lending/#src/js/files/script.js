
let inputFile = document.querySelectorAll('._input-file'),
	inputText = document.querySelectorAll('.js-fileName');

for (let index = 0; index < inputFile.length; index++) {
	let elInput = inputFile[index];
	let inputText  = elInput.closest('.form__line--file').querySelector('.js-fileName');
	elInput.addEventListener('change', (e) => {
		inputText.innerHTML = 'Фаил загружен';
	})
}

