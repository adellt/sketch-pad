$(document).ready(function(){
	
	/***********************
	/Inital function to create boxes
	*************************/
	function init() {
		var number = $("#number").val();
		$("#wrapper").html("");
		$("#wrapper").css("background-image", "url(pattern.jpg)");

		for (var i = 1; i <= (number*number); i++) {
			$("#wrapper").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#wrapper").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});
	};

	//Basic function that clears boxes
	$('#solid').click(function() {

		init();

		$(".box").on("mouseover", function(){
			$(this).addClass("solid");
		});
	});
	

	//Function that slowly makes boxes clear after mousing over many times
	$('#fade').click(function() {

		init();

		$(".box").css("opacity",1);

		$(".box").on("mouseover", function(){
			var opacity = $(".box").css("opacity");
			
			if (opacity === 0) {
				opacity = opacity+0;
			} else {
				opacity = opacity-0.10;
			};
						
			$(this).css("opacity", opacity);
		});
	});


	//Function that fades boxes while having a red trail
	$('#trail').click(function() {

		init();

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