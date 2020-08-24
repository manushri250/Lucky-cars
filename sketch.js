var car, wall ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1300);

  car = createSprite(70, random(50,350), 80, 40);
  car.velocityX = speed;

  wall = createSprite(1300,200,35,350);
  wall.shapeColor = "80,80,80"

  
  
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    
      if (deformation < 110){
        car.shapeColor = color(0,255,0);
      }

      if(deformation < 155 && deformation > 110){
        car.shapeColor = color (230,230,0);
      }

      if (deformation > 155){
        car.shapeColor = color(255,0,0);
      }
  }
  drawSprites();
}
