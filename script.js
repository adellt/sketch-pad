$(document).ready(function(){
	
	$('#solid').click(function() {

		var number = $("#number").val();
		$("#wrapper").html("");

		for (var i = 1; i <= (number*number); i++) {
			$("#wrapper").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#wrapper").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});

		$(".box").on("mouseover", function(){
			$(this).addClass("solid");
		});
	});
	

	$('#fade').click(function() {

		var number = $("#number").val();
		$("#wrapper").html("");

		for (var i = 1; i <= (number*number); i++) {
			$("#wrapper").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#wrapper").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});
		$(".box").css("opacity",1);

		$(".box").on("mouseover", function(){
			var opacity = $(".box").css("opacity");
			
			if (opacity === 0) {
				opacity = opacity+0;
			} else {
				opacity = opacity-0.1;
			};
						
			$(this).css("opacity", opacity);
		});
	});


	$('#trail').click(function() {

		var number = $("#number").val();
		$("#wrapper").html("");

		for (var i = 1; i <= (number*number); i++) {
			$("#wrapper").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#wrapper").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});

		$(".box").on("mouseover", function(){
			$(this).animate({
				"background-color":"#F50C33", 
			},200);

			$(this).animate({
				"opacity":0.0
			},500);
			
		});
	});


})