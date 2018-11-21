var blúbb1, blúbb2, blúbb3;

function setup() {
  createCanvas(600,600);
  blúbb1= new blúbb(200,400,80);
  blúbb2= new blúbb(300,150,120);
  blúbb3= new blúbb(400,200,100);

}

function draw() {
  background(255, 147, 247);
  fill(123,197,250)
  noStroke();
  rect(300,300,400,400)
//hreyfing
blúbb1.move();
blúbb1.show();
blúbb2.move();
blúbb2.show();
blúbb3.move();
blúbb3.show();
}

class blúbb{
constructor(x,y,bukur){
  this.x = x;
  this.y = y;
  this.bukur = bukur;
  this.dir = random(0,2*PI);
  this.speed = random (0,5);
  this. eyeColor = color(100,100,100);
}
//geimveran
show(){
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
  // Teiknum búkinn
  fill(192,6,169);
  rect(this.x,this.y,50,this.bukur);
  // Teiknum hausinn
  fill(255);
  ellipse(this.x,this.y- this.bukur/2, 120,80);
  // Teiknum augun
  fill(this.eyeColor);
  ellipse (this.x-25, this.y - this.bukur/2,20,40);
  ellipse (this.x + 25,this.y - this.bukur/2, 20,40);
  // Teiknum fæturna
  line (this.x - 20, this.y + this.bukur/2, this.x - 20, this.y + this.bukur/2 + 50);
  line (this.x + 20, this.y + this.bukur/2, this.x + 20, this.y + this.bukur/2 + 50);
  //hendur
  line(this.x+25, this.y-1,this.x+50, this.y + this.bukur/4+20);
  line(this.x-60, this.y+5,this.x-25, this.y + this.bukur/6+7)

}
move(){
  this.x = this.x + this.speed*cos(this.dir);
  this.y = this.y + this.speed*sin(this.dir);
  this.speed = this.speed/1.05;
  if(this.speed < 0.1){
    this.dir = random(0,2*PI);
    this.speed = random(1,5);
  }
    if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      this.blink();
      this.dir = atan((this.y - height/2)/(this.x-width/2));
      if(this.x - width/2 > 0){
        this.dir = this.dir + PI;
      }
    }
}

// Velur slembinn lit fyrir augun á zoog.
blink(){
  this.eyeColor = color(random(255), random(255), random(255));
}
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
