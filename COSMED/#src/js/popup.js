function showModla(modal, btn) {
	btn.click(function () {
		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.main').addClass('active');
		modal.addClass('active');
	});

	$('.close-js').click(function () {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		modal.removeClass('active');
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			$('body').removeClass('active');
			$('.wrapper').removeClass('active');
			$('.main').removeClass('active');
			modal.removeClass('active');
		}
	});
}

showModla($('.modal-overlay, .modal--form'), $('.popupBtn-js'));


$('.input--file input').on('change', function () {
	console.log();
	let numFille = this.files.length; 
	if(numFille == 1){
		$('.input-number').html(numFille + ' ' + 'файл');
	}else if(numFille <= 2 ){
		$('.input-number').html(numFille + ' ' + 'файла');
	}
});
