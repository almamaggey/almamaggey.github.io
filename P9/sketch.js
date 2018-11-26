var blúbbi=[];

function setup() {
  createCanvas(600,600);
  for (var i=0; i<70; i=i+1){
    blúbbi[i]= new blúbb( random(200,400),random(200,150), random(100,200));
  }
}

function draw() {
  background(255, 147, 247);
  fill(123,197,250);

  noStroke();
  rect(300,300,400,400);
  for(var i=0; i<blúbbi.length; i=i+1){
    blúbbi[i].move();
    blúbbi[i].show();
  }
}
function mousePressed(){
  for(var i= blúbbi.length-1; i>=0; i =i-1){
    if(fjarlægð(blúbbi[i].x, blúbbi[i].y, mouseX, mouseY)<50){
      blúbbi.splice(i,1);
    }
  }
}
class blúbb{
constructor(x,y,bukur){
  this.x = x;
  this.y = y;
  this.bukur = bukur;
  this.dir = random(0,2*PI);
  this.speed = random (0,5);
  this. eyeColor = color(100,100,100);
  this. eyesize= random(0.5,2);
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
  ellipse (this.x-25, this.y - this.bukur/2,20*this.eyesize,40*this.eyesize);
  ellipse (this.x + 25,this.y - this.bukur/2, 20*this.eyesize,40*this.eyesize);
  // Teiknum fæturna
  line (this.x - 20, this.y + this.bukur/2, this.x - 20, this.y + this.bukur/2 + 50);
  line (this.x + 20, this.y + this.bukur/2, this.x + 20, this.y + this.bukur/2 + 50);
  //hendur
  line(this.x+25, this.y-1,this.x+50, this.y + this.bukur/4+20);
  line(this.x-60, this.y+5,this.x-25, this.y + this.bukur/6+7);

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
