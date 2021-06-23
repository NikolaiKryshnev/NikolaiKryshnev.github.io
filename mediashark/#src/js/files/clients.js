if (document.querySelector('html').classList.contains('_touch')) {
	let blockClients = document.querySelectorAll('.client'),
		close = document.querySelectorAll('._close');
	for (const client of blockClients) {

		client.addEventListener("click", (e) => {
			console.log(e.target);

			if (client.classList.contains('_active') !== true) {
				clearActiveClasses();
				client.classList.add('_active');
				
			} else if (e.target.classList.contains('_close')) {
				e.target.closest('.client').classList.remove('_active');
			}
		});
	}

	function clearActiveClasses() {
		blockClients.forEach((client) => {
			client.classList.remove('_active')
		})
	}

	function closeClients() {
		for (let i = 0; i < close.length; i++) {
			const elClose = close[i];
			elClose.addEventListener("click", (e) => {
				e.target.closest('.client').classList.remove('_active');
			});

		}

	}
}