$(function () {
	$('.loader').loader();

	var progr = 1;
	setInterval(function () {
		$('.loader').loader('setProgress', ++progr);
	}, 100);
});