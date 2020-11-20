var wall, thickness;
var bullet, speed, weight;
var damage;

function setup(){
  createCanvas(1600,400);

  bullet = createSprite(50,200,60,27);
  thickness = random(22,83);
  wall = createSprite(1200,200, thickness , height/2);
  wall.shapeColor = (80,80,80);

  speed = random(223,321);
  weight = random(30,52);
}

function draw(){
  
  background("black");

  bullet.velocityX = speed;
  damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;

    stroke(bullet.shapeColor);
    fill(bullet.shapeColor);
    textSize(20);
    text(`Damage = ${round(damage)}`, 100,100);

    if(damage < 11){
      bullet.shapeColor = "green";
    }

    else if(damage > 10){
      bullet.shapeColor = "red";
    }
  }

  else{
    bullet.shapeColor = "white";
  }
  
  drawSprites();
}