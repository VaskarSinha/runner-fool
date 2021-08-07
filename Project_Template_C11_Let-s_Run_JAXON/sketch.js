var runner, runner_running, edges;
var pathImage;

function preload(){
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(1200,800);
  edges = createEdgeSprites();
  path = createSprite(200,200);
  path.addImage(pathImage)
  runner=createSprite(100,190,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.05;
  runner.x = 100;
  invisibleLine1=createSprite(40,100,20,1050)
  invisibleLine2=createSprite(350,100,20,1050)
  invisibleLine1.visible=false;
  invisibleLine2.visible=false;
}


function draw(){
  background("white");
  console.log(runner.x)
  path.velocityY=4;
  path.scale=1.2;
 if(path.y >600){
  path.y=400;
}
runner.x =World.mouseX;  
runner.collide(invisibleLine1);
runner.collide(invisibleLine2);
drawSprites();
}
