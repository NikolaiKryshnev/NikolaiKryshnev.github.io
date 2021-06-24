let blockClients = document.querySelectorAll('.client'),
	close = document.querySelectorAll('._close');
for (const client of blockClients) {

	if (document.querySelector('html').classList.contains('_touch')) {
		client.addEventListener("click", (e) => {
			anBlock(client, e)
		});
	} else {
		client.addEventListener("mouseover", (e) => {
			anBlock(client, e)
		});
	}
}

function clearActiveClasses() {
	blockClients.forEach((client) => {
		if (client.classList.contains('_active') == true) {
			client.classList.remove('_animation');
			setTimeout(() => {
				client.classList.remove('_active');
			}, 100);
		}
	})
}
function anBlock(client, e) {
	if (client.classList.contains('_active') !== true) {
		clearActiveClasses();
		setTimeout(() => {
			client.classList.add('_animation');

		}, 10);
		client.classList.add('_active');

	} else if (e.target.classList.contains('_close')) {
		e.target.closest('.client').classList.remove('_animation');
		setTimeout(() => {
			e.target.closest('.client').classList.remove('_active');
		}, 100);

	}
}
