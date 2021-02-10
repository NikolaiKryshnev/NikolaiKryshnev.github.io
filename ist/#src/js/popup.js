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
			$('.wrapper').removeClass('active');

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



	// form input univer
	let objInputUn;
	function changeInput() {
		let inputBlock = $(".form-input--universities input");

		inputBlock.change(function (e) {
			let resultInput;
			objInputUn = [];

			for (let i = 0; i < inputBlock.length; i++) {
				let el = inputBlock[i];

				if ($(el).attr('name') === 'university') {
					objInputUn.push('ВУЗ' + ':' + $(el).val());
				} else {
					objInputUn.push(' ' + 'Cпециальность' + ':' + $(el).val() + '\n');
				}
			}
			resultInput = objInputUn.join('');
			$('.universities-js').val(resultInput);
			console.log($('.universities-js').val());
		});
	}
	changeInput()

	$('.plus--js').click(function () {
		let inputUn = $('.form-input--universities');
		inputUn.append(`
		<input type="text" name="university" id="" placeholder="Вуз" >
		<input type="text" name="specialty" id="" placeholder="Cпециальность">
		`);
		changeInput()
	});


	let selectUniver = $('.select-univer'),
		contactLink = $('.contract-link'),
		btnUniv = $('.btnUniv--js'),
		textStudy = $('.form-study__text');

	btnUniv.click(function () {
		let objSelect = {
			typeUniver: '',
			support: '',
		};
		for (let i = 0; i < selectUniver.length; i++) {
			let el = selectUniver[i];
			if ($(el).attr('name') === 'typeUniver') {
				objSelect.typeUniver = $(el).val();
			} else if ($(el).attr('name') === 'supportUniver') {
				objSelect.support = $(el).val();
			}
		}

		if (objSelect.typeUniver === 'Государственный' && objSelect.support === 'Да') {
			contactLink.attr('href', 'Государственный - Да').css({ 'display': 'inline' });
			// $(this).css({ 'display': 'none' });
			// textStudy.css({ 'display': 'block' });


		} else if (objSelect.typeUniver === 'Государственный' && objSelect.support === 'Нет') {
			contactLink.attr('href', 'Государственный - Нет').css({ 'display': 'inline' });
			// $(this).css({ 'display': 'none' });
			// textStudy.css({ 'display': 'block' });


		} else if (objSelect.typeUniver === 'Частный' && objSelect.support === 'Да') {
			contactLink.attr('href', 'Частный - Да').css({ 'display': 'inline' });
			// $(this).css({ 'display': 'none' });
			// textStudy.css({ 'display': 'block' });

		} else if (objSelect.typeUniver === 'Частный' && objSelect.support === 'Нет') {
			contactLink.attr('href', 'Частный - Нет').css({ 'display': 'inline' });
			// $(this).css({ 'display': 'none' });
			// textStudy.css({ 'display': 'block' });

		} else {
			console.log('warring');
		}
		$(this).css({ 'display': 'none' });
		textStudy.css({ 'display': 'block' });
	});

	selectUniver.change(function (e) {
		if (btnUniv.is(':hidden')) {
			btnUniv.css({ 'display': 'block' });
			textStudy.css({ 'display': 'none' });
			contactLink.css({ 'display': 'none' });
		}

	});

});







