$('.input-file input').on('change', function () {
	let numFille = this.files.length; 
	if(numFille == 1){
		$('.js-value').html(numFille + ' ' + 'файл');
	}else if(numFille <= 2 ){
		$('.js-value').html(numFille + ' ' + 'файла');
	}
});