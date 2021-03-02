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