var bullet,wall,thickness;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);


wall.shapeColor=color(80,80,80)
  speed=random(223,321);
  weight=random(30,52);
}



function draw() {
  background(0,255,0);  
  drawSprites();
  
  damage=speed/thickness
  
  bullet.velocityX=speed;

  if(wall.x - bullet.x  <wall.width/2 + bullet.width/2){
    bullet.velocityX=0;
  }

  if(damage<10){
bullet.shapeColor=("green");


  }

  if(damage>=10 ){
  bullet.shapeColor=("red");
    
      }

      
 
    

  drawSprites();

}