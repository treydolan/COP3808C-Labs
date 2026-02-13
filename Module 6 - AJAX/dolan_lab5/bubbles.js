window.onscroll = function() {
    parallaxbubbles();
};

var bubble1 = document.getElementById('bubbles1');
var bubble2 = document.getElementById('bubbles2');
var fish = document.getElementById('fish');

// height of entire document
var scrollheight = document.body.scrollHeight;
// height of browser window
var windowheight = window.innerHeight;


function parallaxbubbles() {
	// get number of pixels document has scrolled vertically
	var scrolltop = window.pageYOffset;
	var scrollamount = (scrolltop / (scrollheight - windowheight)) * 100;

	// Bubble 1: up + right (diagonal to top-right), same speed as before - use top and left at same time to go diagonal
	bubble1.style.top = -scrolltop * 0.1 + 'px';
	bubble1.style.left = scrolltop * 0.1 + 'px';

	// move bubble2 down at same speed
	bubble2.style.top = scrolltop * 0.6 + 'px';

	// Fish: start right and move left as scroll
	fish.style.left = (100 - scrollamount) + '%';

}
