//---------------------------------------------
// Input number
//---------------------------------------------

function catalogItemCounter(field) {
	var fieldCount = function (el) {
		var
			min = el.data('min') || false,
			max = el.data('max') || false,
			dec = el.prev('.dec-js'),
			inc = el.next('.inc-js');

		function init(el) {
			if (!el.attr('disabled')) {
				dec.on('click', decrement);
				inc.on('click', increment);
			}

			function decrement() {
				var value = parseInt(el[0].value);
				value--;

				if (!min || value >= min) {
					el[0].value = value;
				}
			};

			function increment() {
				var value = parseInt(el[0].value);

				value++;

				if (!max || value <= max) {
					el[0].value = value++;
				}
			};

		}

		el.each(function () {
			init($(this));
		});
	};

	$(field).each(function () {
		fieldCount($(this));
	});
}
catalogItemCounter('.buy-input-js');

