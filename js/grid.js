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
	
	//loop to create horizontal lines
	for(var x = 0; ; ){
		context.moveTo(x, );
		context.lineTo(x, );
	}

	//loop to create vertical lines

	for(var y = 0; ; ){
		//fill this part in yourselves!
	}


	context.stroke();
};

draw();

