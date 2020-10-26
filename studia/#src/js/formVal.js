//---------------------------------------
// Form Validation
//---------------------------------------

$(document).ready(function () {
	$('.form-js-validate').submit(function () {
		let form = $(this);
		let field = [];
		form.find('input[data-validate]').each(function () {
			field.push('input[data-validate]');
			let value = $(this).val(),
				line = $(this).closest('.validate__input-js');
			for (var i = 0; i < field.length; i++) {
				if (!value) {
					line.addClass('form__input-required');
					setTimeout(function () {
						line.removeClass('form__input-required')
					}.bind(this), 6000);
					event.preventDefault();
				}
			}
		});
	});
});