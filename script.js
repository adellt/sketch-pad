$(document).ready(function(){

	$("#buttons").on("mouseenter", function(){
		$(this).addClass("trail");
	});

	$(".bix").on("mouseenter", function(){
		$(this).addClass("trail");
	});



	$('#go').click(function() {
		for (var i = 1; i <= 16; i++) {
			$("#wrapper").append("<div class='box'>Box</div>");
		}
	});




})