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
			$(this).addClass("trail");
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
		$(".box").css("opacity":"100");

		$(".box").on("mouseover", function(){
			var opacity = $(".box").css("opacity");
			if ()
			$(this).css("opacity", opacity);
			//reduce opacity by 10 every time
		});
	});


})