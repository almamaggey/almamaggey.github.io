function setup() {
  createCanvas(400,400);
  frameRate(5);
}

function draw() {
  background(255,100,5);
  if(mouseX < width/4 && mouseY<height/2){
  	fill(40,36,236);
    for(var i = 1; i< 50;i = i+1) {
      ellipse(random(width/2), random(height/2), random(30), random(50));
    }
  }
    if(mouseX > width/4 && mouseY<height/2){
  	fill(236,36,94);
    for(var j = 1; j< 50;j = j+1) {
      rect(random(width/2,width),random(height/2), random(30), random(30));
    }
  }
  if(mouseX >width/4 && mouseY>height/2){
    fill(20,50,70)
    for(var u=1; u<50; u=u+1){
        ellipse(random(width/2,width), random(height/2, height/1), random(30), random(50));
}
  }
if(mouseX < width/4 && mouseY>height/2){
  fill(232,216,10)
    for(var k=1; k<50; k=k+1){
      rect(random(width/2,width/25), random(height/1, height/2), random(30), random(50));
    }
  }
}
