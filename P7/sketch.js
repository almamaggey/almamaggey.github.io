var x = 100;
var y = 100;
var hradiX = 5;
var hradiY = 11;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var tré//https://www.pexels.com/search/christmas/

function preload() {
  tré = loadImage('myndskopp.jpg');
}
function setup() {
	createCanvas(600,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
	background(tré);
	colorMode(HSB);
	frameRate(50);
}

function draw() {
	background(tré);
  x = x + hradiX;
  y = y + hradiY;
  if ((x > width-boltiStaerd/2) || (x < boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  if ((y > height-boltiStaerd/2) || (y < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
	if(abs(spadiY - y) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - x) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
		stig = stig + 1;
	}
  fill(245, 179, 241);
  ellipse(x, y, boltiStaerd, boltiStaerd);
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	fill(255, 255, 255);
	text("Stig: " + stig,20,20);
}
