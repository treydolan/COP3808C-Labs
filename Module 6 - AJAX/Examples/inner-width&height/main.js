let text =
"<p>innerWidth: " + window.innerWidth + "</p>" +
"<p>innerHeight: " + window.innerHeight + "</p>" +
"<p>outerWidth: " + window.outerWidth + "</p>" +
"<p>outerHeight: " + window.outerHeight + "</p>";

let display = document.getElementById('display');

function displayInner() {
    display.innerHTML = text;
}

displayInner();
