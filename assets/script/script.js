$(document).ready(function() {

    $( window ).load(function(){
    $(".Kind").delay(200).fadeIn(900);
    });

    $( window ).load(function(){
    $(".Choice").delay(500).fadeIn(900);
    $(".Choice").delay(500).fadeIn(900);
    });

    $( window ).load(function(){
    $("#pictures").delay(200).fadeIn(900);
    });

    $( window ).load(function(){
    $(".doodle").delay(1000).fadeIn(900);
    $(".doodle").addClass("rotated");

    });


	$(".names").hover(function() {
		$(".names").css("opacity", "0.3");
		$(this).css("opacity", "1");

	}, function() {
		$(".names").css("opacity", "0.9");
	}
	);

	$(".item").hover(function() {
		$(this).css("opacity", "1");
	}, function() {
		$(this).css("opacity", "0.7");
	});

    $("#topphoto").hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

    $("#bottomphoto").hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

});