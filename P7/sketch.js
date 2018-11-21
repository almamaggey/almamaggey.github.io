function setup() {
  createCanvas(700,400);
}

function draw() {
  background(255, 147, 247);
  blúbb(mouseX, mouseY,10,60,100);
  blúbb(100,100,20,140,60);
  blúbb(300,200,30,100.50);
  // x var 200 og y var 150
}

function blúbb(x,y, augun, búkur, haus){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(6, 249,30);
  rect(x,y+50,40,búkur);
  // Teiknum hausinn
  fill(255);
  ellipse(x,y, 110, haus);
  // Teiknum augun
  fill(100);
  ellipse (x-25,y, augun,40);
  ellipse (x+25,y, 20,augun);
  // Teiknum fæturna
  line (x-20, y+100, x-20, y+150);
  line (x+20, y+100, x+20, y+150);
  line(x+20, y+50, x+50, y+80);
  line(x-50,y+30 ,x-20,y+50);
}
