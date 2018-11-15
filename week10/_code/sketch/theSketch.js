console.log("hellow worlds!");

let theCapture;
function setup(){
	console.log("hello p5!");
	createCanvas(windowWidth, windowHeight);

  theCapture = createCapture(VIDEO);
}

function draw(){
	background(200,50,200);
	ellipse(100,100,100,100);
	image(theCapture, 0, 0, width, width * theCapture.height / theCapture.width);
	// noStroke();
	push();
	fill(255,0,0);
	for (var theIndex = 0; theIndex < 10; theIndex++){
		rect(theIndex * 50, 400, 25,25);
	// 	console.log(theIndex);
	}
	pop();

	ellipse(mouseX, mouseY, 10,10);
	// mouseClicked(console.log("sup!?"))


}