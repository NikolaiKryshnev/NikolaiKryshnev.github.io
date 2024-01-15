
if ($(window).width() < 768) {
	let myProfilsidebar = $('.myProfil-sidebar'),
		myProfilsidebarUl = $('.myProfil-sidebar__ul')
	myProfilsidebarActive = $('.myProfil-sidebar li.active a').html();

	myProfilsidebar.prepend(`
	<div class="myProfil-sidebar__title">${myProfilsidebarActive}
		<i class="arrow">
			<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L6 6L11 1" stroke="black" stroke-width="2"/>
			</svg>
		</i>
	</div>`);

	$('.myProfil-sidebar__title').on('click', function (e) {
		$(this).toggleClass('active');
		myProfilsidebarUl.slideToggle(500);
	});
}

