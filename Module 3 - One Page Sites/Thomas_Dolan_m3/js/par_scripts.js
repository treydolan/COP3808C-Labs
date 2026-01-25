// JavaScript Document
$(document).ready(function () { //make sure all is loaded
	//window.onload = function () { ////for safari +mobile+ make sure DOM is rendered.

		$("#toTop").css("display", "none");
		////go find the selector called id toTop, change its css, to initially invisible

		$("#toTop").click(function () {
			//when to top would be visible....
			$('html, body').animate({
				scrollTop: "0px"
			}, '1000');
		});
		//////////////end to top func
		
		//declare all global vars available to all the func to come.
		var header_fired = false; //header effect not yes triggered
		var to_top_fired = false; //top top effect not yes triggered

		//vars for sec 1
		var sec1Top = $("#page").offset().top;
		//the distance in px from this sec to the top of the page.


		//vars for sec 2
		var sec2Top = $(".parallax-2").offset().top;


		//vars for sec 3
		var sec3Top = $(".parallax-3").offset().top;

		//alert(sec2Top);
		
		
		
		////////////////////////////////
	function findScrolls(){
 location.reload(); //reload the page
		
	}		
var doit; //declare a new obj
	$(window).resize(function () { //every time the window is resized call func
		//alert("res")
		clearTimeout(doit); //clear prev values
		doit = setTimeout(findScrolls, 1000); //after 1000 ms call the func findScrolls (remeasures the scroll distances)
	});	
		
		
		
		
		
		
		
		
		
		
		
		/////////////////navigation functions///////////////////////////////////////////////
		$("#to_s1").click(function () {
			$('html, body').animate({
				scrollTop: ((sec1Top - 170) + "px")
			}, 500);
		});

		// Anywhere but heading 1, header will only be 60px
		$("#to_s2").click(function () {
			$('html, body').animate({
				scrollTop: ((sec2Top - 70) + "px")
			}, 800);
		});

		$("#to_s3").click(function () {
			$('html, body').animate({
				scrollTop: ((sec3Top - 70) + "px")
			}, 800);
		});
		//////////////////////////////////
		$(window).scroll(function () { //while scrolling 60 times per sec.
			var where = $(window).scrollTop();
			//where are we from the top of the window.
			//$("#show").text(parseInt(where));///////////////REMEMBER TO CANCEL BEFORE DEPLOY!
			//to show or not to show the "to_top" button.
			if (where > 200 && !to_top_fired) {
				//if scrolled past 200, and not fired yet...
				$("#toTop").fadeIn(2000); //fade in in 2 sec
				to_top_fired = true; //mark as fired
			}

			if (where < 200 && to_top_fired) {
				//if we scrolled back close to top, and it fired,
				$("#toTop").fadeOut(2000); //hide it, also adds a display:none;
				to_top_fired = false; //mark as not fired
			}

			//make header switch looks.
			if (where >= sec2Top && !header_fired) { //if scrolled>200 and header still big....
				$("#top_header").addClass("header_small");
				//add the class header_small
				header_fired = true; //mark as fired
			}

			//if scrolled<200 and header still small....
			if (where < sec2Top && header_fired) {
				$("#top_header").removeClass("header_small");
				//remove the class header_small
				header_fired = false; //mark as  not fired
			}		
		}); ///end window scroll
	//}; //end window load
}); //end doc ready
