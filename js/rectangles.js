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
	context.fillStyle = "red";
    context.fillRect(25,25,100,100);
    context.fillStyle = "blue";
    context.fillRect(45,45,100,100);
    context.fillStyle = "green";
    context.fillRect(65,65,100,100);
};

draw();

