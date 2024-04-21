// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function updateSecondBlockHeight() {
	if (window.innerWidth > 767.98) {
		// Получаем высоту первого блока с классом 'first-block'
		var firstBlockHeight = document.querySelector('.tabs-body').offsetHeight;
		// Присваиваем высоту второму блоку с классом 'second-block'
		document.querySelector('.tabs__content').style.height = firstBlockHeight + 64 + 'px';
	}else{
		document.querySelector('.tabs__content').style.height = "auto";
	}
}
updateSecondBlockHeight();
window.addEventListener('resize', function () {
	// При изменении размера окна вызываем функцию обновления высоты второго блока
	updateSecondBlockHeight();
});