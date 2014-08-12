$(document).ready(function(){

	//Array with pictures urls
	var pics = [
		[1, "http://img2.wikia.nocookie.net/__cb20110825150854/iamalive/images/c/c0/The_Awesome_Face_Background_by_DaPhinoXX.jpg"],
		[2, "http://ozarkspuppies.com/wp-content/uploads/2014/01/White-Morkie-Puppy.jpg"],
		[3, "http://www.catster.com/files/bengal-kittens-10.jpg"],
		[4, "http://2.bp.blogspot.com/_-eXo1yH2gzs/S9mqqCvaxFI/AAAAAAAAETw/Vgn64heCW5M/s1600/MWM_pattern_tile_6.jpg"],
		[5, "http://download.4-designer.com/files/2012120620/Bird-pattern-vector-material-1-7746.jpg"],
	]

	/***********************
	Initial function to create boxes
	*************************/
	function init() {
		var number = $("#number").val();
		var pic = 1 + Math.floor(Math.random() * 5);

		$("#puzzle").html("");
		$("#url").html("");
		$("#puzzle").css("background-image", "url(Pictures/"+pic+".jpg)");

//Also need to account for wrong numbers. Bring up alert number.
		for (var i = 1; i <= (number*number); i++) {
			$("#puzzle").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#puzzle").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});
	

/*
		var size = parseInt($("#puzzle").css("width"),10) / parseInt(number, 10);

		for (var i = 1; i <= (number*number); i++) {
			$("#puzzle").append("<div class='box'>&nbsp;</div>");
			console.log("Number: "+number);
			if (i % 2 === 0) {
				$(".box").css({"width":Math.floor(size), "height":Math.floor(size)});
				console.log("Size: "+size);
				console.log("Floor: " +Math.floor(size));
			}
			else {
				$(".box").css({"width":Math.ceil(size), "height":Math.ceil(size)});
				console.log("Size:" +size);
				console.log("Ceil: "+Math.ceil(size));
			}
		}
*/
		$("#url").append("<p><a href='" + pics[pic-1][1] + "' target='_blank'>Go to picture</a></p>");
		$("#url").show();

	};

	/**********************************
	Basic function that clears boxes
	*************************************/
	$('#solid').click(function() {

		init();

		$(".box").on("mouseover", function(){
			$(this).css("opacity", 0);
		});
	});
	
	/**********************************************
	Function that slowly makes boxes clear after mousing over many times
	***********************************************/
	$('#fade').click(function() {

		init();

		$(".box").css("opacity",1);

		$(".box").on("mouseover", function(){
			var opacity = $(".box").css("opacity");
			var nextOpacity = opacity - 0.1;

			if (nextOpacity > 0) {
				opacity = nextOpacity;
			} else {
				opacity = 0;
			};
						
			$(this).css("opacity", opacity);
		});
	});

	/***********************************************
	Function that fades boxes while having a red trail
	*************************************************/
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