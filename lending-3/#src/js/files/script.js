
let inputFile = document.querySelectorAll('._input-file'),
	inputText = document.querySelectorAll('.js-fileName');

for (let index = 0; index < inputFile.length; index++) {
	let elInput = inputFile[index];
	let inputText = elInput.closest('.form__line--file').querySelector('.js-fileName');
	elInput.addEventListener('change', (e) => {
		inputText.innerHTML = 'Фаил загружен';
	})
}



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".panel-progres__proc").style.height = scrolled + "%";
}