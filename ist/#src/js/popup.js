$(document).ready(function () {
	function showModla(modal, btn) {
		btn.click(function () {
			modal.addClass('active');
			$('.wrapper').addClass('active');
			$('.modal-overlay').addClass('active');
			let formTitle = $(this).attr('data-titleModal');
			$('.modal .form-title').html(formTitle)

			return false;
		});

		$('.close-js').click(function () {
			modal.removeClass('active');
			$('.modal-overlay').removeClass('active');
		});

		$(".modal-overlay").on('click', function (e) {
			if (e.target == this) {
				modal.removeClass('active');
				$('.wrapper').removeClass('active');
				$('.modal-overlay').removeClass('active');

			}
		});
	}

	showModla($('.modal'), $('.popupBtn-js'));


	let inputBlock;

	$('.plus--js').click(function () {
		let inputUn = $('.form-input--universities');
		// for (let i = 0; i < inputUn.length; i++) {
		// 	const el = inputUn[i];
		// 	console.log(el);
		// }	
		inputUn.append(`
		<input type = "text" name = "" id = "" placeholder = "Вуз" >
		<input type="text" name="" id="" placeholder="Cпециальность">
		`);
		inputBlock = $(".form-input--universities input");
		// console.log(inputUn);
	});
});

$(".form-input--universities input").change(function (e) {
	for (let i = 0; i < inputBlock.length; i++) {
		const el = inputBlock[i];
		console.log(el.value);
		inputBlock = $(".form-input--universities input");
	}
	// console.log(e.target.value);

});



