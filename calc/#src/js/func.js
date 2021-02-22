// Valid Number input
function valNumber(inputNumber) {
	inputNumber.bind('change keyup input click', function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
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
		console.log('Стандарт' + ' ' + '-' + ' ' + numberCoeffOne);
		htmlCoeff.html(' ' + numberCoeffOne + ' %');
		resultPriceCasca.html(' ' + (Math.trunc( (priceCasca / 100 * numberCoeffOne) * 100 ) / 100) + '$')


	} else if (3 < YearsResult && YearsResult <= 5) {
		if (YearsResult == 4) {
			$('.carYears').html(' ' + YearsResult + ' года');
		} else {
			$('.carYears').html(' ' + YearsResult + ' лет');
		}
		console.log('Стандарт' + ' ' + '-' + ' ' + numberCoeffTwo);
		htmlCoeff.html(' ' + numberCoeffTwo + ' %');
		resultPriceCasca.html(' ' + (Math.trunc( (priceCasca / 100 * numberCoeffTwo) * 100 ) / 100) + '$')
		

	} else if (5 < YearsResult && YearsResult <= 7) {
		$('.carYears').html(' ' + YearsResult + ' лет');

		console.log('Стандарт' + ' ' + '-' + ' ' + numberCoeffThree);
		htmlCoeff.html(' ' + numberCoeffThree + ' %');
		resultPriceCasca.html(' ' + (Math.trunc( (priceCasca / 100 * numberCoeffThree) * 100 ) / 100) + '$')

	}
}