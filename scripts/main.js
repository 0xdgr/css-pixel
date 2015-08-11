var clearButton = document.getElementById('clear-button');
var columns = 12;
var canvas = document.getElementById('canvas');
var pixel;
var href;
var lastHref = 0;

for (var i = 0; i < columns * columns; i++) {
	pixel = document.createElement('a');
	pixel.setAttribute('class', 'pixel');
	href = '#' + i;
	pixel.setAttribute('href', href);
	canvas.appendChild(pixel);

	lastHref++;
}

clearButton.addEventListener('click', function () {
	var pixels = document.querySelectorAll('.pixel');
	var href;
	console.log(pixels);

	for (var i = 0; i < columns * columns; i++) {
		href = '#' + lastHref;
		pixels[i].setAttribute('href', href);	

		lastHref++;
	}
});