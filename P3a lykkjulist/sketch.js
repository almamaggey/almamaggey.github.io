var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var mouth= 150

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(10,236,232);
  fill(255,255,255)
  ellipse(x, y, faceWidth, faceHeight);
  fill(0)
  ellipse( 170,140, 10, eyeSize)
  ellipse(130, 140, 10, eyeSize)
  noFill();
stroke(0, 0, 0);
bezier(150, 175, 175, 175, 155,160, 150, 150);
arc(150, 190, 40, 40, 0,PI, CHORD);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75, 150);
  faceHeight = random(150, 200);
  eyeSize    = random(10,  30);
}
