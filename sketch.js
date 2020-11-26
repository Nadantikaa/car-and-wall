var wall,car ;
var speed,weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
 weight=random(400,1500);


  
    car=createSprite(50, 200, 50,5);  
    car.velocityX = speed;
    

 
  	
    
    wall=createSprite(1200, 200,60, height/2);  
    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)c
}


function draw() {
  background(0);  
  
  if(car.x-wall.x<car.width/2+wall.width/2)
  {
	  car.velocityX = 0;
	  var deformation = 0.5*weight*speed*speed/22500

	  if(deformation<100){
		  car.shapeColor=color(0,225,0);
	  }
	  else
	  if(deformation>100&&deformation<180){
		  car.shapeColor=color(230,230,0);
	  }
	  else
	  if(deformation>180){
		  car.shapeColor=color(255,0,0);
	  }
  }


  drawSprites();
 
}

