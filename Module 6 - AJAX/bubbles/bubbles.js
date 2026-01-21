var bubble1 = document.getElementById('bubbles1');
var bubble2 = document.getElementById('bubbles2');
var fish = document.getElementById('fish');

var scrollheight = document.body.scrollHeight; // height of entire document
var windowheight = window.innerHeight; // height of browser window


function parallaxbubbles() {
	var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
	var scrollamount = (scrolltop / (scrollheight - windowheight)) * 100;
	bubble1.style.top = -scrolltop * 0.1 + 'px'; // move bubble1 at 20% of scroll speed
	bubble2.style.top = -scrolltop * 0.6 + 'px'; // move bubble2 at 50% of scroll speed
	fish.style.left = -100 + scrollamount + '%';

}
