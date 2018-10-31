function setup() {
  createCanvas(300,300);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}
function draw(){
  for(var x = 7; x < width; x = x+15){
    fill(random(0,360),70,90);
    for(var y = 7; y < height; y = y+15){
      ellipse(x,y, 13,13);
    }
  }
}
