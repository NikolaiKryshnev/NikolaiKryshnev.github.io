$(document).ready(function () {
	if ($(window).width() <= 1200) {
		$('.sidebar-js  .sidebar-head-js .sidebar-arrow').on('click', sidebar);

	}else{
		$('.sidebar-js  .sidebar-head-js').on('click', sidebar);

	}

	$('.current-menu-item').parent().slideToggle(1000).addClass('active');
	$('.current-menu-item').parent().siblings().addClass('active');
});

function sidebar() {
	let sidebarBody = $('.sidebar-js .sidebar-body-js'),
		sidebarHead = $('.sidebar-js .sidebar-head-js');
	if ($(window).width() <= 1200) {
		sidebarBody.not($(this).parent().next()).slideUp(1000).removeClass('active');
		$(this).parent().next().slideToggle(1000).toggleClass('active');
		sidebarHead.not($(this).parent()).removeClass('active');
		$(this).parent().toggleClass('active');
	} else {
		sidebarBody.not($(this).next()).slideUp(1000).removeClass('active');
		$(this).next().slideToggle(1000).toggleClass('active');
		sidebarHead.not($(this)).removeClass('active');
		$(this).toggleClass('active');
	}

}




