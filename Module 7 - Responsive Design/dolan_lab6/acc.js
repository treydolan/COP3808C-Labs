 $(document).ready(function () {

	var allContents = $(".panel");
	var allTabs = $(".tab");
	var animSpeed = 700;

	// OPEN SECTION 1 BY DEFAULT ON LOAD
	allTabs.removeClass("currentTab");
	allContents.hide();
	$("#title1").addClass("currentTab");
	$("#content1").show();
	 
	 
	 
 	$(".tab").click(function () {

		// close everything
		for (var i = 0; i < allContents.length; i++) {
			$(allTabs[i]).removeClass("currentTab");
			$(allContents[i]).slideUp(animSpeed);
		}

		
 		var whoClicked = $(this).attr('data');

 		if ($('#' + whoClicked).css('display') == 'none') {
			$(this).addClass("currentTab");
 			$("#" + whoClicked).slideDown(animSpeed);
 		} else {
 			$("#" + whoClicked).slideUp(animSpeed);
 		}
 	});

 });
