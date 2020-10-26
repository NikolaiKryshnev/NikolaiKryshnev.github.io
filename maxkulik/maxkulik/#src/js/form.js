$(document).ready(function () {
	let $form = $("#form-contact");
	let $formModal = $("#form-modal");
	let $formReviews = $("#form-reviews");




	$form.submit(function () {
		$.ajax({
			type: "POST",
			url: "js/form.php",
			data: $(this).serialize()
		}).done(function () {
			let modal = $('.modal-overlay, .modalThanks-js');
			modal.addClass('active');
			$form.trigger('reset');
		});
		return false;
	});

	$formModal.submit(function () {
		$.ajax({
			type: "POST",
			url: "js/form.php",
			data: $(this).serialize()
		}).done(function () {
			let modal = $('.modalThanks-js');
			$(".modalForm-js").removeClass('active');
			modal.addClass('active');
			$formModal.trigger('reset');
		});
		return false;
	});

	$formReviews.submit(function () {
		$.ajax({
			type: "POST",
			url: "js/formReviews.php",
			data: $(this).serialize()
		}).done(function () {
			let modal = $('.modal-overlay, .modalThanks-js');
			modal.addClass('active');
			$formReviews.trigger('reset');
		});
		return false;
	});
});