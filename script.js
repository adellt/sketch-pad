$(document).ready(function(){
	//$("#url").hide();

	//dictionary with pictures urls
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
		$("#wrapper").html("");
		$("#url").html("");
		$("#wrapper").css("background-image", "url(Pictures/"+pic+".jpg)");
//Does not work for all box sizes. 
//Also need to account for wrong numbers. Bring up alert number.
		for (var i = 1; i <= (number*number); i++) {
			$("#wrapper").append("<div class='box'>&nbsp;</div>");
		}

		var size = parseInt($("#wrapper").css("width"),10) / parseInt(number, 10) + "px";
		$(".box").css({"width":size, "height":size});
	
		$("#url").append("<a href='" + pics[pic-1][1] + "' target='_blank'>Go to picture</a>");
		$("#url").show();
	};

	/**********************************
	Basic function that clears boxes
	*************************************/
	$('#solid').click(function() {

		init();

		$(".box").on("mouseover", function(){
			$(this).addClass("solid");
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
			
			if (opacity === 0) {
				opacity = opacity+0;
			} else {
				opacity = opacity-0.10;
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