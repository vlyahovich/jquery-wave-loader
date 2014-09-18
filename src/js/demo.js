$(function () {
	$('.loader').loader();

	var progr = 0;
	setInterval(function () {
		$('.loader').loader('setProgress', ++progr);
	}, 2000);
});