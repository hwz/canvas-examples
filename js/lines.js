//creates the canvas on the html page
var canvas = document.createElement("canvas");
//the context is essentially the pen that you will draw with.
var context = canvas.getContext("2d");
//height and width of the canvas
canvas.width = 500;
canvas.height = 500;
//adds it to the page
document.body.appendChild(canvas);


var draw = function () {

	//vertical lines
	context.moveTo(100, 0);
	context.lineTo(100, 500);

	context.moveTo(200, 0);
	context.lineTo(200, 500);

	
	//horizontal lines
	context.moveTo(0, 100);
	context.lineTo(500, 100);

	context.moveTo(0, 200);
	context.lineTo(500, 200);

	context.stroke();
};

draw();

