

	(function ($) {
		//<TASK>---------------------------------------
		// Valid Number input
function valNumber(inputNumber) {
	inputNumber.bind('change keyup input click', function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		inputNumber.keyup(function () {
			let inputThis = $(this);
			if (inputThis.val().length > 6)
				inputThis.val(inputThis.val().substr(0, 6));
		});
	});
}

// add options years Car
function addBlockFor(parentBlock, number, numberAll) {
	for (let i = 0; i < 7; i++) {
		number = numberAll - (i + 1)
		html = `<option value="${number}" >${number}</option>`;
		parentBlock.append(html);
	}
}

// disabldeBtn
function disabledBtn(btn, val) {
	if (val.val().length >= 1) {
		btn.removeAttr('disabled');
		showModla($('.modal-overlay, .modal'), $('#resultCalc'));

	} else {
		btn.attr('disabled', 'disabled');
	}
}

// ShowProcent
function appendProcent(priceCasca, resultPriceCasca, YearsResult, htmlCoeff, numberCoeffOne, numberCoeffTwo, numberCoeffThree) {
	if (YearsResult <= 3) {
		if (YearsResult == 0) {
			$('.carYears').html(' до ' + (YearsResult + 1) + ' года');
		} else if (YearsResult == 1) {
			$('.carYears').html(' ' + YearsResult + ' год');
		} else {
			$('.carYears').html(' ' + YearsResult + ' года');
		}
		htmlCoeff.html(' ' + numberCoeffOne + ' %');
		resultPriceCasca.html(' ' + (Math.trunc((priceCasca / 100 * numberCoeffOne) * 100) / 100) + '$')


	} else if (3 < YearsResult && YearsResult <= 5) {
		if (YearsResult == 4) {
			$('.carYears').html(' ' + YearsResult + ' года');
		} else {
			$('.carYears').html(' ' + YearsResult + ' лет');
		}
		htmlCoeff.html(' ' + numberCoeffTwo + ' %');
		resultPriceCasca.html(' ' + (Math.trunc((priceCasca / 100 * numberCoeffTwo) * 100) / 100) + '$')


	} else if (5 < YearsResult && YearsResult <= 7) {
		$('.carYears').html(' ' + YearsResult + ' лет');

		htmlCoeff.html(' ' + numberCoeffThree + ' %');
		resultPriceCasca.html(' ' + (Math.trunc((priceCasca / 100 * numberCoeffThree) * 100) / 100) + '$')

	}
}
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
		$('.content-infoExtra').hide();
		$('.infoExtra--show').show()
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			$('body').removeClass('active');
			$('.wrapper').removeClass('active');
			$('.main').removeClass('active');
			modal.removeClass('active');
			$('.content-infoExtra').hide();
			$('.infoExtra--show').show()
		}
	});

	$('.calcRepeat--js').on('click', function (e) {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		modal.removeClass('active');
		$('.content-infoExtra').hide();
		$('.infoExtra--show').show();
		$('#carPrice').val('').focus();
		$('#carType').prop('selectedIndex',0);
		$('#carYear').prop('selectedIndex',0);
	});
}

		$(document).ready(function () {

	let typeCar = $('#carType'),
		priceCar = $('#carPrice'),
		yearsCar = $('#carYear');

	let modalCarPrice = $('.carPrice'),
		modalCarYears = $('.carYears'),
		modalCoeffStandart = $('#cascoStandart .coeff'),
		modalCoeffOptima = $('#cascoOptima .coeff'),
		modalCascoPrice = $('.cascoPrice'),
		resultPriceStandart = $('#cascoStandart .cascoPrice'),
		resultPriceOptima = $('#cascoOptima .cascoPrice');


	let requiredBlock = $('.required')
	let yearsAll = new Date().getFullYear(),
		years;

	valNumber($('#carPrice'));
	addBlockFor(yearsCar, years, yearsAll);
	disabledBtn($('#resultCalc'), requiredBlock);

	requiredBlock.on('keyup', function () {
		var $this = $(this);
		disabledBtn($('#resultCalc'), $this);
	});

	$('#resultCalc').on('click', function (e) {
		let resultPriceCar = priceCar.val(),
			yearsCarResult = yearsAll - yearsCar.val();

		modalCarPrice.html(resultPriceCar + '$');

		if (13000 >= resultPriceCar) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 3.50, 4.80, 5.30);
			$('#cascoOptima').hide();
			$('#cascoStandart').attr('style', 'flex: 1 1 100%; max-width: 100%');
		} else if (13001 <= resultPriceCar && resultPriceCar <= 15000) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 3.40, 4.72, 5.15);
			$('#cascoOptima').hide();
			$('#cascoStandart').attr('style', 'flex: 1 1 100%; max-width: 100%');
		} else if (15001 <= resultPriceCar && resultPriceCar <= 20000) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 3.25, 4.51, 4.92);
			$('#cascoOptima').show();
			$('#cascoStandart').removeAttr('style')
			appendProcent(resultPriceCar, resultPriceOptima, yearsCarResult, modalCoeffOptima, 3.40, 4.70, 5.20);

		} else if (20001 <= resultPriceCar && resultPriceCar <= 30000) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 3.05, 4.24, 4.62);
			$('#cascoOptima').show();
			$('#cascoStandart').removeAttr('style')
			appendProcent(resultPriceCar, resultPriceOptima, yearsCarResult, modalCoeffOptima, 3.40, 4.70, 5.20);

		} else if (30001 <= resultPriceCar && resultPriceCar <= 40000) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 2.90, 4.03, 4.39);
			$('#cascoOptima').show();
			$('#cascoStandart').removeAttr('style')
			appendProcent(resultPriceCar, resultPriceOptima, yearsCarResult, modalCoeffOptima, 3.40, 4.70, 5.20);

		} else if (40000 < resultPriceCar) {
			appendProcent(resultPriceCar, resultPriceStandart, yearsCarResult, modalCoeffStandart, 2.70, 3.75, 4.09);
			$('#cascoOptima').show();
			$('#cascoStandart').removeAttr('style')
			appendProcent(resultPriceCar, resultPriceOptima, yearsCarResult, modalCoeffOptima, 3.40, 4.70, 5.20);
		}
	});

	$('.infoExtra--show').on('click', function (e) {
		$('.content-infoExtra').show()
		$(this).hide()

	});


});
		//</TASK>---------------------------------------
	})(jQuery);

