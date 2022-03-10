var backgroundImg;
var backgroundImg1;
var normal;
var lander;
var obstacle;
var ground;
var alien, alien2, alien3;
var rand;

function preload(){
  backgroundImg=loadImage("bg.png");
  backgroundImg1=loadImage("bg_sur.png");
  normal=loadImage("normal.png");
  alien = loadImage("alien.png");
  alien2 = loadImage("alien2.png");
  alien3 = loadImage("alien3.png");
}

function setup(){
  createCanvas(1000,800);

  lander = createSprite(250,350,40,40);
  lander.addImage(normal);
  lander.scale = 0.1

  
  
  

  ground = createSprite(500,800, 1000, 20);
  ground.shapeColor = "brown";
}

function draw(){
  background("pink");
  image(backgroundImg1, 0,0)
  
  

  

  if (keyDown(UP_ARROW)){
    lander.y -=5;
  }
  if (keyDown(DOWN_ARROW)){
    lander.y +=5;
  }
  if (keyDown(RIGHT_ARROW)){
    lander.x +=5;
  }
  if (keyDown(LEFT_ARROW)){
    lander.x -=5;
  }

  /*if (obstacle.isTouching(ground)){
    obstacle = createSprite(random(0,1000), 50, 50, 50);
  }*/

  

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount %60==0){
    var obstacle = createSprite(500, 50, 50, 50);
    obstacle.velocityY =10 
  }
  var rand = Math.round(random(1,3));

  switch(rand){
    case 1: obstacle.addImage(alien);
    break;

    case 2: obstacle.addImage(alien2);
      break;

      case 3: obstacle.addImage(alien3);
        break;

        default:break;
  }
  obstacle.scale = 0.09
  
}