var hundur;//https://www.youtube.com/watch?v=mRf3-JkwqfU
var blóm;//https://www.pexels.com/photo/nature-summer-purple-yellow-36753/
var hlutfall = 1;
function preload() {
  hundur = loadImage('mynd1.jpg');
  blóm = loadImage('mynd2.png');
}
function setup() {
  createCanvas(700,450);
  background(hundur);
  colorMode(HSB);
  frameRate(2);
}
function draw() {
  hlutfall = random(0.05,0.2);
imageMode(CENTER);
  image(blóm, random(0,width),random(0,height),blóm.width*hlutfall,blóm.height*hlutfall);
}
function keyPressed() {
  imageMode(CORNER);
  noTint();
  background(hundur);
}
