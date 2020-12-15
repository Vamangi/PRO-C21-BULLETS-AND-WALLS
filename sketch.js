var thickness,wall
var speed,weight,bullet

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);

  weight=random(400,1500);

  thickness=random(22,83)

  bullet=createSprite(80, 200, 150, 60);
  bullet.velocityX=speed; 
 
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background("white"); 

  if (isTouching(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if( damage>10){
    wall.shapeColor="green"
  }
  if(damage<10){
  wall.shapeColor="red"
}
}else {
    wall.shapeColor=(80,80,80);

  }
  drawSprites();
}

function isTouching(bullet,wall){
 
if(wall.x-bullet.x<bullet.width/2+wall.width/2){
  bullet.velocityX=0;
  return true;
}else {
  return false
}
}