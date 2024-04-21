$('iframe').each(function (i, val) {
	let iframeVideo = $(this);
	function videoPlay(wrapper) {
		let iframe = wrapper.find('iframe');
		let src = iframe.data('src');
		iframe.attr('src', src);

		wrapper.find('.videoPoster svg').css('transform', 'scale(0)');
		// wrapper.css({ 'opacity': '0', 'visibility': 'hidden', 'z-index': '-1' });
		// wrapper.css({ 'z-index': '-1' }); 
		wrapper.find('iframe').css({ 'z-index': '3' });

	}


	$(this).parent('.video-Iframe').append(`
	<button class="videoPoster js-videoPoster" style="width: 100%; height: 100%; display: flex;  justify-content: flex-end; align-items: flex-start;  position:absolute;background-image:url(${$(this).parent('.video-Iframe').attr('data-img')}); background-repeat:  no-repeat; background-size: cover; transition: all 1s linear;">
	<svg width="37px" height="37px" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.4999 0C16.7893 0 0 16.7893 0 37.4999C0 58.2105 16.7893 74.9998 37.4999 74.9998C58.2105 74.9998 74.9998 58.2105 74.9998 37.4999C74.9779 16.7986 58.2014 0.0221296 37.4999 0ZM53.2926 38.6948C53.033 39.2155 52.611 39.6377 52.0901 39.8973V39.9106L30.6616 50.625C29.3382 51.2862 27.7295 50.7496 27.0681 49.4262C26.8801 49.05 26.7832 48.6347 26.7856 48.2143V26.7857C26.785 25.3064 27.9836 24.1067 29.463 24.1059C29.879 24.1057 30.2894 24.2024 30.6616 24.3884L52.0901 35.1027C53.4141 35.7625 53.9526 37.3708 53.2926 38.6948Z" fill="#CCA75D"/>
</svg>
	</button>`);

	let attrVideo = iframeVideo.attr('src');
	iframeVideo.attr('data-src', attrVideo + '?rel=0&showinfo=0&autoplay=1&enablejsapi=1&loop=0&egm=0&border=0&fs=0&modestbranding=1&showinfo=0&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=2');
	iframeVideo.attr('src', '');


	$('.video-Iframe').each(function (i, val) {
		$(this).on('click', function (e) {
			e.preventDefault();
			let poster = $(this);
			let wrapper = poster.closest('.video-Iframe');
			videoPlay(wrapper);

			var my_video = $(this).children("iframe")[0].contentWindow;

			$("body").on("click", function () {

				my_video.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");

			});
		});
	});
});