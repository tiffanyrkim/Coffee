$(document).ready(function() {
	$(".names").hover(function() {
		$(".names").css("opacity", "0.3");
		$(this).css("opacity", "1");

	}, function() {
		$(".names").css("opacity", "0.9");
	}
	);

	$(".doodle").click(function() {
		var theta = $(window).scrollTop() % Math.PI;
		$(".doodle").css({ transform: 'rotate(' + theta + 'rad)' });
	});

});