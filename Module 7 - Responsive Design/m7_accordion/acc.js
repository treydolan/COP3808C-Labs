 $(document).ready(function () {
 	////////////////////////////////
 	var allContents = $(".panel");
 	//alert(allContents.length);
	 var allTabs = $(".tab");
	 
	 
	 
 	$(".tab").click(function () {

 		var i;
 		for (i = 0; i < allContents.length; i++) {
 			//alert(allContents[i]);
			$(allTabs[i]).removeClass("currentTab");
 			$(allContents[i]).slideUp(500);
 		}

	
		
		
 		var whoClicked = $(this).attr('data');
 		//alert(whoClicked);
 		//alert($("#"+whoClicked).css('display'));
 		if ($('#' + whoClicked).css('display') == 'none') {
			$(this).addClass("currentTab");
 			$("#" + whoClicked).slideDown(500);
 		} else {
 			$("#" + whoClicked).slideup(500);
 		}
 	}); //end function

 }); //end doc ready
