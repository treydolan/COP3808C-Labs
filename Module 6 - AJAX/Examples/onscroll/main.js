window.onscroll = function() {
    myFunction();
    imgFunction();
    countPixels();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}

function imgFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("myImg").className = "slideUp";
  }
}

function countPixels() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  document.getElementById("scrollCounter").textContent =
    "Scroll: " + scrollTop + "px";
}
