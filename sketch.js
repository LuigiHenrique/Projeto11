var mar;
var navio;
var marImg;
var navio_movendo;

function preload(){
navio_movendo = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marImg = loadImage ("sea.png");
}


function setup(){
  createCanvas(400,400);
  
  mar = createSprite (400,200);
  mar.addImage(marImg);
  mar.scale= 0.5;
  mar.velocityX= -5;
  navio = createSprite(100,250,50,50);
  navio.addAnimation("movendo",navio_movendo);
  navio.scale= 0.3;
}

function draw() {
  if(mar.x < 0){
    mar.x = mar.width/4;
  }
  
  background("blue");
    drawSprites();

 
}
